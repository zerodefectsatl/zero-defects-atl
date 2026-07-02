// Discord -> ntfy trade-signal monitor.
// Watches the channels listed in config.json (in a server YOUR bot is a member
// of - see ../README.md Part 1 for the compliant setup), parses trade ideas,
// pushes them to your phone via ntfy with a tap-to-open TradingView chart link,
// and appends every signal to signals-log.jsonl so Claude Code + tradingview-mcp
// on this PC can act on them.

require('dotenv').config();
const fs = require('fs');
const path = require('path');
const { Client, GatewayIntentBits } = require('discord.js');
const { parseMessage } = require('./parser');

const config = JSON.parse(fs.readFileSync(path.join(__dirname, 'config.json'), 'utf8'));

const BOT_TOKEN = process.env.DISCORD_BOT_TOKEN;
const NTFY_TOPIC = process.env.NTFY_TOPIC;
const NTFY_SERVER = process.env.NTFY_SERVER || 'https://ntfy.sh';
const SIGNALS_LOG = path.join(__dirname, 'signals-log.jsonl');

if (!BOT_TOKEN || !NTFY_TOPIC) {
  console.error('Missing DISCORD_BOT_TOKEN or NTFY_TOPIC. Copy .env.example to .env and fill it in.');
  process.exit(1);
}

const watchedIds = new Map(config.watchChannels.map((c) => [c.id, c]));

function tradingViewUrl(symbol) {
  return `https://www.tradingview.com/chart/?symbol=${encodeURIComponent(symbol)}`;
}

function formatTitle(parsed, channelName) {
  if (!parsed.isSignal) return `💬 ${channelName}`;
  const sym = parsed.symbols.map((s) => `$${s}`).join(' ');
  const dir = parsed.direction ? `${parsed.direction} ` : '';
  const levels = [
    parsed.entry ? `entry ${parsed.entry}` : null,
    parsed.stop ? `stop ${parsed.stop}` : null,
    parsed.targets.length ? `tgt ${parsed.targets.join('/')}` : null,
  ].filter(Boolean).join(' / ');
  return `🔔 ${dir}${sym}${levels ? ' — ' + levels : ''}`;
}

async function pushNtfy(parsed, channelName, author) {
  // ntfy JSON publish endpoint (POST to server root) — supports full UTF-8,
  // unlike raw HTTP headers which are Latin-1 only (emoji would crash fetch).
  const payload = {
    topic: NTFY_TOPIC,
    title: formatTitle(parsed, channelName),
    message: `${author} in #${channelName}:\n${parsed.text}`.slice(0, 4000),
    priority: parsed.isSignal ? 5 : 3,
    tags: parsed.isSignal ? ['chart_with_upwards_trend', 'rotating_light'] : ['speech_balloon'],
  };
  if (parsed.symbols.length > 0) {
    const url = tradingViewUrl(parsed.symbols[0]);
    payload.click = url;
    payload.actions = [{ action: 'view', label: 'Open chart', url }];
  }

  const headers = { 'Content-Type': 'application/json' };
  if (process.env.NTFY_TOKEN) headers.Authorization = `Bearer ${process.env.NTFY_TOKEN}`;

  const res = await fetch(NTFY_SERVER, { method: 'POST', headers, body: JSON.stringify(payload) });
  if (!res.ok) console.error(`ntfy push failed: ${res.status} ${await res.text()}`);
}

function logSignal(parsed, channelName, author) {
  const entry = {
    ts: new Date().toISOString(),
    channel: channelName,
    author,
    symbols: parsed.symbols,
    direction: parsed.direction,
    entry: parsed.entry,
    stop: parsed.stop,
    targets: parsed.targets,
    text: parsed.text,
  };
  fs.appendFileSync(SIGNALS_LOG, JSON.stringify(entry) + '\n');
}

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

client.once('clientReady', () => {
  console.log(`Logged in as ${client.user.tag}`);
  console.log(`Watching ${watchedIds.size} channel(s); pushing to ${NTFY_SERVER}/${NTFY_TOPIC}`);
});
// discord.js versions before 14.16 emit "ready" instead of "clientReady".
client.once('ready', () => {});

client.on('messageCreate', async (message) => {
  try {
    if (message.author.bot && !config.includeBotMessages) return;
    const watch = watchedIds.get(message.channelId);
    if (!watch) return;

    // Combine plain text with any embed text (signal bots often post embeds).
    const embedText = message.embeds
      .map((e) => [e.title, e.description, ...(e.fields || []).map((f) => `${f.name} ${f.value}`)].filter(Boolean).join('\n'))
      .join('\n');
    const text = [message.content, embedText].filter(Boolean).join('\n').trim();
    if (!text) return;

    const parsed = parseMessage(text);
    const channelName = watch.name || message.channel.name || message.channelId;
    const author = message.member?.displayName || message.author.username;

    if (parsed.isSignal) {
      console.log(`[SIGNAL] #${channelName} ${formatTitle(parsed, channelName)}`);
      logSignal(parsed, channelName, author);
      await pushNtfy(parsed, channelName, author);
    } else if (config.forwardNonSignals) {
      await pushNtfy(parsed, channelName, author);
    }
  } catch (err) {
    console.error('Error handling message:', err);
  }
});

client.on('error', (err) => console.error('Discord client error:', err));

client.login(BOT_TOKEN);
