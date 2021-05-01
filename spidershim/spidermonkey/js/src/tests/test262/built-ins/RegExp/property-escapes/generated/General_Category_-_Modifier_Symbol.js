// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `General_Category=Modifier_Symbol`
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
    0x00005E,
    0x000060,
    0x0000A8,
    0x0000AF,
    0x0000B4,
    0x0000B8,
    0x0002ED,
    0x000375,
    0x001FBD,
    0x00AB5B,
    0x00FF3E,
    0x00FF40,
    0x00FFE3
  ],
  ranges: [
    [0x0002C2, 0x0002C5],
    [0x0002D2, 0x0002DF],
    [0x0002E5, 0x0002EB],
    [0x0002EF, 0x0002FF],
    [0x000384, 0x000385],
    [0x001FBF, 0x001FC1],
    [0x001FCD, 0x001FCF],
    [0x001FDD, 0x001FDF],
    [0x001FED, 0x001FEF],
    [0x001FFD, 0x001FFE],
    [0x00309B, 0x00309C],
    [0x00A700, 0x00A716],
    [0x00A720, 0x00A721],
    [0x00A789, 0x00A78A],
    [0x00FBB2, 0x00FBC1],
    [0x01F3FB, 0x01F3FF]
  ]
});
testPropertyEscapes(
  /^\p{General_Category=Modifier_Symbol}+$/u,
  matchSymbols,
  "\\p{General_Category=Modifier_Symbol}"
);
testPropertyEscapes(
  /^\p{General_Category=Sk}+$/u,
  matchSymbols,
  "\\p{General_Category=Sk}"
);
testPropertyEscapes(
  /^\p{gc=Modifier_Symbol}+$/u,
  matchSymbols,
  "\\p{gc=Modifier_Symbol}"
);
testPropertyEscapes(
  /^\p{gc=Sk}+$/u,
  matchSymbols,
  "\\p{gc=Sk}"
);
testPropertyEscapes(
  /^\p{Modifier_Symbol}+$/u,
  matchSymbols,
  "\\p{Modifier_Symbol}"
);
testPropertyEscapes(
  /^\p{Sk}+$/u,
  matchSymbols,
  "\\p{Sk}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [
    0x00005F,
    0x0002EC,
    0x0002EE,
    0x001FBE,
    0x00FF3F
  ],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00005D],
    [0x000061, 0x0000A7],
    [0x0000A9, 0x0000AE],
    [0x0000B0, 0x0000B3],
    [0x0000B5, 0x0000B7],
    [0x0000B9, 0x0002C1],
    [0x0002C6, 0x0002D1],
    [0x0002E0, 0x0002E4],
    [0x000300, 0x000374],
    [0x000376, 0x000383],
    [0x000386, 0x001FBC],
    [0x001FC2, 0x001FCC],
    [0x001FD0, 0x001FDC],
    [0x001FE0, 0x001FEC],
    [0x001FF0, 0x001FFC],
    [0x001FFF, 0x00309A],
    [0x00309D, 0x00A6FF],
    [0x00A717, 0x00A71F],
    [0x00A722, 0x00A788],
    [0x00A78B, 0x00AB5A],
    [0x00AB5C, 0x00DBFF],
    [0x00E000, 0x00FBB1],
    [0x00FBC2, 0x00FF3D],
    [0x00FF41, 0x00FFE2],
    [0x00FFE4, 0x01F3FA],
    [0x01F400, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{General_Category=Modifier_Symbol}+$/u,
  nonMatchSymbols,
  "\\P{General_Category=Modifier_Symbol}"
);
testPropertyEscapes(
  /^\P{General_Category=Sk}+$/u,
  nonMatchSymbols,
  "\\P{General_Category=Sk}"
);
testPropertyEscapes(
  /^\P{gc=Modifier_Symbol}+$/u,
  nonMatchSymbols,
  "\\P{gc=Modifier_Symbol}"
);
testPropertyEscapes(
  /^\P{gc=Sk}+$/u,
  nonMatchSymbols,
  "\\P{gc=Sk}"
);
testPropertyEscapes(
  /^\P{Modifier_Symbol}+$/u,
  nonMatchSymbols,
  "\\P{Modifier_Symbol}"
);
testPropertyEscapes(
  /^\P{Sk}+$/u,
  nonMatchSymbols,
  "\\P{Sk}"
);

reportCompare(0, 0);
