// Print the most recent parsed signal(s) from signals-log.jsonl.
// This is the bridge for Claude Code + tradingview-mcp on the home PC:
//   "run latest-signal.js and open that symbol on TradingView"
//
// Usage: node latest-signal.js [count]   (default 1)

const fs = require('fs');
const path = require('path');

const LOG = path.join(__dirname, 'signals-log.jsonl');
const count = Math.max(1, parseInt(process.argv[2], 10) || 1);

if (!fs.existsSync(LOG)) {
  console.log('No signals logged yet (signals-log.jsonl does not exist).');
  process.exit(0);
}

const lines = fs.readFileSync(LOG, 'utf8').trim().split('\n').filter(Boolean);
const latest = lines.slice(-count).reverse();

for (const line of latest) {
  let s;
  try { s = JSON.parse(line); } catch { continue; }
  const levels = [
    s.entry ? `entry ${s.entry}` : null,
    s.stop ? `stop ${s.stop}` : null,
    s.targets?.length ? `targets ${s.targets.join(' / ')}` : null,
  ].filter(Boolean).join(', ');
  console.log(`[${s.ts}] #${s.channel} by ${s.author}`);
  console.log(`  ${s.direction || '??'} ${s.symbols.map((x) => '$' + x).join(' ')}${levels ? ' — ' + levels : ''}`);
  console.log(`  "${s.text.replace(/\s+/g, ' ').slice(0, 200)}"`);
  console.log('');
}
