# Trading Toolkit — TradingView MCP + Discord Signal Monitor + ntfy Alerts

This folder is self-contained and has **nothing to do with the website build**. It exists so
the setup survives between Claude sessions and can be pulled onto the home PC.

---

## Part 0 — Why the TradingView MCP "disconnected" (the actual diagnosis)

The TradingView MCP ([tradesdontlie/tradingview-mcp](https://github.com/tradesdontlie/tradingview-mcp))
does **not** talk to TradingView's servers. It talks to the **TradingView Desktop app running on
your home PC**, over a Chrome debug port (`9222`). That means two hard rules:

1. **It only works in Claude Code running ON the home PC.** A Claude Code *web/cloud* session
   runs in a container in the cloud — it cannot see your PC, so the MCP will never show up there.
   If you started this session from the browser or phone, that alone explains "it was connected
   and now it's not."
2. **TradingView Desktop must be launched with the debug flag every time.** The flag does NOT
   persist. If TradingView restarted normally (PC reboot, app auto-update, you closed and
   reopened it from the normal shortcut), the debug port is gone and the MCP reports
   `cdp_connected: false` even though the MCP server itself is still configured.

**#2 is the most common cause.** Nothing is broken — TradingView just needs to be relaunched
with the flag.

### Fix it right now (on the home PC)

Double-click **`reconnect-tradingview.bat`** in this folder. It closes TradingView and relaunches
it with the debug port enabled. Then in Claude Code (local, on the PC) run the MCP's
`tv_health_check` tool — it should report connected.

### Fix it permanently

Make the flag part of how TradingView always starts:

1. Right-click your TradingView shortcut → **Properties**.
2. In **Target**, append a space and: `--remote-debugging-port=9222`
   so it reads like: `"C:\Users\<you>\AppData\Local\TradingView\TradingView.exe" --remote-debugging-port=9222`
3. Apply. Use only that shortcut from now on (pin it to taskbar/Start).

### Verify the MCP server is still registered

On the home PC, in a terminal:

```powershell
claude mcp list
```

You should see `tradingview`. If it's missing, re-add it (adjust the install path to wherever
you cloned tradingview-mcp):

```powershell
claude mcp add tradingview -- node "C:\path\to\tradingview-mcp\src\server.js"
```

Checklist when it "won't connect":

| Symptom | Fix |
|---|---|
| MCP not listed in Claude Code | `claude mcp list`; re-add as above; restart Claude Code |
| Listed but `cdp_connected: false` | TradingView wasn't launched with the flag → run `reconnect-tradingview.bat` |
| Connection refused on port 9222 | TradingView not running, or firewall blocking localhost:9222 |
| Works on PC, missing in web session | Expected — CDP-based MCP is home-PC-only, use local Claude Code |

---

## Part 1 — Monitoring the CHRWME Trading Discord (the compliant way)

Goal: watch his most popular channels, catch trade ideas/signals the moment they post, and
push them to your phone.

**Important:** Discord bans "self-bots" (automating your personal account with your user token) —
it's an account-ban offense. Don't use any tool that asks for your personal Discord token.
The safe, reliable ways to read his channels programmatically:

### Option A — Channel Following (recommended, works for most signal servers)

Many trading servers make their signal/alert channels **Announcement channels** exactly so
members can follow them.

1. Create your own free private Discord server ("My Trading Feed").
2. In the CHRWME server, open each popular channel you care about. If it has a **Follow**
   button (megaphone icon channels), click it → choose a channel in *your* server.
   Every post now mirrors into your server automatically.
3. Add the monitor bot (below) to **your** server — you're the owner, so that's allowed —
   and point it at the mirrored channels.

### Option B — Ask a CHRWME admin

If his key channels aren't followable, ask an admin to either make them Announcement
channels or add your (read-only) bot. Trading groups get this request a lot.

### Fallback — Discord native notifications

Not programmatic, but reliable: right-click each channel → Notification Settings →
**All Messages**, and enable mobile push. Zero setup, no parsing.

### Setting up the monitor bot (5 minutes, one time)

1. Go to https://discord.com/developers/applications → **New Application** → name it.
2. **Bot** tab → Reset Token → copy the token (goes in `.env`).
3. Same tab: enable **MESSAGE CONTENT INTENT** (required to read message text).
4. **OAuth2 → URL Generator**: scope `bot`, permissions `View Channels` + `Read Message History`.
   Open the generated URL and invite the bot to **your** server.
5. In Discord, Settings → Advanced → enable **Developer Mode**. Right-click each channel the
   bot should watch → **Copy Channel ID** → put the IDs in `discord-ntfy-monitor/config.json`.

---

## Part 2 — ntfy on your phone

1. Install the **ntfy** app (iOS/Android).
2. Subscribe to a topic with an unguessable name, e.g. `zd-trades-k93hx2` (topics are public
   by name on ntfy.sh — obscure name = your security).
3. Put the same topic in `discord-ntfy-monitor/.env`.
4. In the app, give the topic max priority / override Do Not Disturb if you want signals to
   always break through.

---

## Part 3 — Run the monitor (home PC)

```powershell
cd trading\discord-ntfy-monitor
npm install
copy .env.example .env    # then edit .env: bot token + ntfy topic
npm start                 # or double-click run-monitor.bat
```

What it does on every message in a watched channel:

- Parses ticker(s), direction (long/short/calls/puts), entry, stop, targets.
- **Real signals** → `urgent` ntfy push (breaks through DND) titled like
  `🔔 LONG $SPY — entry 502.5 / stop 499 / tgt 507`, with a tap-to-open
  **TradingView chart link for that symbol**.
- Other chatter in watched channels → normal-priority push (or set `forwardNonSignals`
  to `false` in `config.json` to push signals only).
- Appends every parsed signal to `signals-log.jsonl` — this is the bridge file Claude Code
  on the PC can read to drive the TradingView MCP (see Part 4).

**Auto-start on boot:** Task Scheduler → Create Basic Task → trigger *When I log on* →
Start a program → point it at `run-monitor.bat`.

---

## Part 4 — The full seamless loop (and one honest limitation)

```
CHRWME Discord post
      │  (channel-follow mirror → your server)
      ▼
monitor.js (home PC, runs 24/7)
      │  parses ticker / direction / entry / stop / target
      ├─► ntfy → your phone (urgent push, tap = TradingView chart of that symbol)
      └─► signals-log.jsonl (on disk)
                 │
                 ▼
Claude Code on the PC + tradingview-mcp
      "load the latest signal"  → opens the symbol on TradingView Desktop,
                                   applies your indicators/levels
                 │
                 ▼
You review the chart → set the alert / take the trade → broker executes
```

**The honest limitation:** TradingView has **no public API** to create alerts or place orders
from outside the app, and the broker connection lives inside TradingView. So the last step —
actually pulling the trigger — stays yours (which, for real money, is a feature, not a bug).
Everything before it is automated:

- The signal reaches your phone within ~1–2 seconds of the Discord post.
- The push notification's tap action opens that exact symbol's chart.
- On the PC, tell Claude Code (with tradingview-mcp connected): *"Read the newest entry in
  trading/discord-ntfy-monitor/signals-log.jsonl and open that symbol on TradingView"* — it
  will drive the desktop app for you via the MCP, and can annotate entry/stop/target.

---

## Files in this folder

| File | Purpose |
|---|---|
| `reconnect-tradingview.bat` | One-click: relaunch TradingView with the MCP debug port |
| `discord-ntfy-monitor/monitor.js` | The Discord watcher / ntfy pusher |
| `discord-ntfy-monitor/parser.js` | Signal parsing (tickers, direction, entry/stop/target) |
| `discord-ntfy-monitor/config.json` | Which channels to watch, keyword tuning |
| `discord-ntfy-monitor/.env.example` | Template for bot token + ntfy topic |
| `discord-ntfy-monitor/run-monitor.bat` | Double-click launcher / Task Scheduler target |
