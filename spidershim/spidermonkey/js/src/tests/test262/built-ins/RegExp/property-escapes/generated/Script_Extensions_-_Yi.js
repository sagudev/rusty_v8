// Copyright 2017 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Yi`
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
    0x0030FB
  ],
  ranges: [
    [0x003001, 0x003002],
    [0x003008, 0x003011],
    [0x003014, 0x00301B],
    [0x00A000, 0x00A48C],
    [0x00A490, 0x00A4C6],
    [0x00FF61, 0x00FF65]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Yi}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Yi}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Yiii}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Yiii}"
);
testPropertyEscapes(
  /^\p{scx=Yi}+$/u,
  matchSymbols,
  "\\p{scx=Yi}"
);
testPropertyEscapes(
  /^\p{scx=Yiii}+$/u,
  matchSymbols,
  "\\p{scx=Yiii}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x003000],
    [0x003003, 0x003007],
    [0x003012, 0x003013],
    [0x00301C, 0x0030FA],
    [0x0030FC, 0x009FFF],
    [0x00A48D, 0x00A48F],
    [0x00A4C7, 0x00DBFF],
    [0x00E000, 0x00FF60],
    [0x00FF66, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Yi}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Yi}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Yiii}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Yiii}"
);
testPropertyEscapes(
  /^\P{scx=Yi}+$/u,
  nonMatchSymbols,
  "\\P{scx=Yi}"
);
testPropertyEscapes(
  /^\P{scx=Yiii}+$/u,
  nonMatchSymbols,
  "\\P{scx=Yiii}"
);

reportCompare(0, 0);
