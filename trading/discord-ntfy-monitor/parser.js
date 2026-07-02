// Signal parsing: pull tickers, direction, and price levels out of free-form
// Discord trade posts. Tuned for typical US day-trading signal formats like:
//   "LONG $SPY 502.5, stop 499, targets 505 / 507"
//   "AAPL 230c 7/10 entry 1.85 pt 2.50 sl 1.50"
//   "Shorting NVDA here @ 128.40"

// Common uppercase words that look like tickers but aren't.
const NOT_TICKERS = new Set([
  'A', 'I', 'AT', 'BE', 'BY', 'DO', 'GO', 'IF', 'IN', 'IS', 'IT', 'NO', 'OF',
  'ON', 'OR', 'SO', 'TO', 'UP', 'US', 'ALL', 'AND', 'ARE', 'ATH', 'ATM', 'BUY',
  'CALL', 'CALLS', 'DAY', 'DD', 'DTE', 'EMA', 'ENTRY', 'EOD', 'ETF', 'EXP',
  'FOMC', 'FOR', 'GAP', 'HOD', 'ITM', 'IV', 'LFG', 'LOD', 'LONG', 'LOTTO',
  'NEW', 'NOT', 'NOW', 'OTM', 'OUT', 'PM', 'PT', 'PUT', 'PUTS', 'RSI', 'RUN',
  'SELL', 'SHORT', 'SL', 'SMA', 'STOP', 'THE', 'TP', 'TRIM', 'VWAP', 'WAIT',
  'YOLO',
]);

const num = '(\\d{1,6}(?:\\.\\d{1,4})?)';

function extractSymbols(text) {
  const symbols = new Set();

  // $TSLA style — unambiguous.
  for (const m of text.matchAll(/\$([A-Za-z]{1,5})\b/g)) {
    symbols.add(m[1].toUpperCase());
  }

  // Bare uppercase tokens (TSLA, SPY) if nothing $-prefixed was found.
  if (symbols.size === 0) {
    for (const m of text.matchAll(/\b([A-Z]{2,5})\b/g)) {
      if (!NOT_TICKERS.has(m[1])) symbols.add(m[1]);
    }
  }

  return [...symbols];
}

function extractDirection(text) {
  const t = text.toLowerCase();
  if (/\b(long|calls?|buy(ing)?|bto|bullish)\b/.test(t)) return 'LONG';
  if (/\b(short(ing)?|puts?|sell(ing)?|sto|bearish)\b/.test(t)) return 'SHORT';
  return null;
}

function firstMatch(text, patterns) {
  for (const p of patterns) {
    const m = text.match(p);
    if (m) return m[1];
  }
  return null;
}

function extractLevels(text) {
  const t = text.toLowerCase();
  const entry = firstMatch(t, [
    new RegExp(`(?:entry|enter|in|avg|filled)[:\\s@]*\\$?${num}`),
    new RegExp(`@\\s*\\$?${num}`),
  ]);
  const stop = firstMatch(t, [
    new RegExp(`(?:stop\\s*loss|stop|sl)[:\\s@]*\\$?${num}`),
  ]);
  const targets = [];
  // Capture "targets 505 / 507", "tp 2.50, 3.00", "pt1 248 pt2 251" etc.
  for (const m of t.matchAll(
    new RegExp(`(?:targets?|tp\\d?|pt\\d?|take\\s*profit)[:\\s@]*\\$?${num}((?:\\s*[\\/,&+]\\s*\\$?${num})*)`, 'g')
  )) {
    targets.push(m[1]);
    for (const extra of (m[2] || '').matchAll(new RegExp(num, 'g'))) {
      targets.push(extra[1]);
    }
  }
  return { entry, stop, targets };
}

/**
 * Parse one Discord message. Returns:
 * { isSignal, symbols, direction, entry, stop, targets, text }
 * isSignal = has at least one ticker AND (a direction or a price level),
 * which separates actionable calls from general chatter.
 */
function parseMessage(text) {
  const symbols = extractSymbols(text);
  const direction = extractDirection(text);
  const { entry, stop, targets } = extractLevels(text);

  const isSignal =
    symbols.length > 0 && (direction !== null || entry !== null || stop !== null || targets.length > 0);

  return { isSignal, symbols, direction, entry, stop, targets, text };
}

module.exports = { parseMessage };
