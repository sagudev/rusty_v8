// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.19-8-5
description: >
    Array.prototype.map doesn't consider newly added elements in
    sparse array
---*/

  var callCnt = 0;
  function callbackfn(val, idx, obj)
  {
    srcArr[1000] = 3;
    callCnt++;
    return val;
  }

  var srcArr = new Array(10);
  srcArr[1] = 1;
  srcArr[2] = 2;
  var resArr = srcArr.map(callbackfn);

assert.sameValue(resArr.length, 10, 'resArr.length');
assert.sameValue(callCnt, 2, 'callCnt');

reportCompare(0, 0);
