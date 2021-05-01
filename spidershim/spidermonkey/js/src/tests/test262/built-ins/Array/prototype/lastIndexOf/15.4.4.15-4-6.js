// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.15-4-6
description: >
    Array.prototype.lastIndexOf returns -1 if 'length' is 0
    (subclassed Array, length overridden with obj with valueOf)
---*/

 var i = Array.prototype.lastIndexOf.call({length: { valueOf: function () { return 0;}}}, 1);
  

assert.sameValue(i, -1, 'i');

reportCompare(0, 0);
