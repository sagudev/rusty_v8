// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Miao`
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
    [0x016F00, 0x016F44],
    [0x016F50, 0x016F7E],
    [0x016F8F, 0x016F9F]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Miao}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Miao}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Plrd}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Plrd}"
);
testPropertyEscapes(
  /^\p{scx=Miao}+$/u,
  matchSymbols,
  "\\p{scx=Miao}"
);
testPropertyEscapes(
  /^\p{scx=Plrd}+$/u,
  matchSymbols,
  "\\p{scx=Plrd}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x00DBFF],
    [0x00E000, 0x016EFF],
    [0x016F45, 0x016F4F],
    [0x016F7F, 0x016F8E],
    [0x016FA0, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Miao}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Miao}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Plrd}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Plrd}"
);
testPropertyEscapes(
  /^\P{scx=Miao}+$/u,
  nonMatchSymbols,
  "\\P{scx=Miao}"
);
testPropertyEscapes(
  /^\P{scx=Plrd}+$/u,
  nonMatchSymbols,
  "\\P{scx=Plrd}"
);

reportCompare(0, 0);
