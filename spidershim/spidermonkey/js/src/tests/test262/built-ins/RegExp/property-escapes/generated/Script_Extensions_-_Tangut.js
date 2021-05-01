// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Tangut`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v9.0.0
  Emoji v5.0 (UTR51)
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [
    0x016FE0
  ],
  ranges: [
    [0x017000, 0x0187EC],
    [0x018800, 0x018AF2]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Tangut}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Tangut}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Tang}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Tang}"
);
testPropertyEscapes(
  /^\p{scx=Tangut}+$/u,
  matchSymbols,
  "\\p{scx=Tangut}"
);
testPropertyEscapes(
  /^\p{scx=Tang}+$/u,
  matchSymbols,
  "\\p{scx=Tang}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x016FDF],
    [0x016FE1, 0x016FFF],
    [0x0187ED, 0x0187FF],
    [0x018AF3, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Tangut}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Tangut}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Tang}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Tang}"
);
testPropertyEscapes(
  /^\P{scx=Tangut}+$/u,
  nonMatchSymbols,
  "\\P{scx=Tangut}"
);
testPropertyEscapes(
  /^\P{scx=Tang}+$/u,
  nonMatchSymbols,
  "\\P{scx=Tang}"
);

reportCompare(0, 0);
