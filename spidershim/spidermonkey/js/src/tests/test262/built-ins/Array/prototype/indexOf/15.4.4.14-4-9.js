// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.14-4-9
description: Array.prototype.indexOf - 'length' is a number of value 0.1
---*/

        var targetObj = [];
        var obj = { 0: targetObj, 100: targetObj, length: 0.1 };

assert.sameValue(Array.prototype.indexOf.call(obj, targetObj), -1, 'Array.prototype.indexOf.call(obj, targetObj)');

reportCompare(0, 0);
