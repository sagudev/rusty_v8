// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Variation_Selector`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v9.0.0
  Emoji v5.0 (UTR51)
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00180B, 0x00180D],
    [0x00FE00, 0x00FE0F],
    [0x0E0100, 0x0E01EF]
  ]
});
testPropertyEscapes(
  /^\p{Variation_Selector}+$/u,
  matchSymbols,
  "\\p{Variation_Selector}"
);
testPropertyEscapes(
  /^\p{VS}+$/u,
  matchSymbols,
  "\\p{VS}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00180A],
    [0x00180E, 0x00DBFF],
    [0x00E000, 0x00FDFF],
    [0x00FE10, 0x0E00FF],
    [0x0E01F0, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Variation_Selector}+$/u,
  nonMatchSymbols,
  "\\P{Variation_Selector}"
);
testPropertyEscapes(
  /^\P{VS}+$/u,
  nonMatchSymbols,
  "\\P{VS}"
);

reportCompare(0, 0);
