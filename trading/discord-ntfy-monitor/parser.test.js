// Parser regression tests. Run with: npm test
const assert = require('node:assert');
const { parseMessage } = require('./parser');

let passed = 0;
function check(name, text, expected) {
  const p = parseMessage(text);
  try {
    for (const [key, want] of Object.entries(expected)) {
      assert.deepStrictEqual(p[key], want, `${key}: got ${JSON.stringify(p[key])}, want ${JSON.stringify(want)}`);
    }
    passed++;
  } catch (err) {
    console.error(`FAIL: ${name}\n  input: ${text}\n  ${err.message}`);
    process.exitCode = 1;
  }
}

check('classic long with levels',
  'LONG $SPY 502.5, stop 499, targets 505 / 507',
  { isSignal: true, symbols: ['SPY'], direction: 'LONG', stop: '499', targets: ['505', '507'] });

check('options shorthand call implies LONG',
  'AAPL 230c 7/10 entry 1.85 pt 2.50 sl 1.50',
  { isSignal: true, symbols: ['AAPL'], direction: 'LONG', entry: '1.85', stop: '1.50', targets: ['2.50'] });

check('options shorthand put implies SHORT',
  'SPY 500p entry 2.10 sl 1.60',
  { isSignal: true, symbols: ['SPY'], direction: 'SHORT', entry: '2.10', stop: '1.60' });

check('shorting at price',
  'Shorting NVDA here @ 128.40',
  { isSignal: true, symbols: ['NVDA'], direction: 'SHORT', entry: '128.40' });

check('multi target with commas and ampersand',
  '$TSLA tp 248, 251 & 255 sl 242',
  { isSignal: true, symbols: ['TSLA'], targets: ['248', '251', '255'], stop: '242' });

check('futures shorthand',
  'watching /ES long over 5500, target 5520',
  { isSignal: true, symbols: ['ES'], direction: 'LONG', targets: ['5520'] });

check('chatter is not a signal',
  'good morning everyone, market opens in 30',
  { isSignal: false, symbols: [] });

check('prose slashes do not create tickers',
  'nice risk/reward here and/or wait for confirmation',
  { symbols: [] });

check('vwap and indicator words are not tickers',
  'holding above VWAP and the 9 EMA, be patient',
  { isSignal: false, symbols: [] });

if (process.exitCode) {
  console.error(`\n${passed} passed, with failures above.`);
} else {
  console.log(`All ${passed} parser tests passed.`);
}
