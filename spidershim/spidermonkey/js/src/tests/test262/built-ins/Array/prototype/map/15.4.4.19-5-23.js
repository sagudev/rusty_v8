// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
es5id: 15.4.4.19-5-23
description: Array.prototype.map - number primitive can be used as thisArg
---*/

        function callbackfn(val, idx, obj) {
            return this.valueOf() === 101;
        }

        var testResult = [11].map(callbackfn, 101);

assert.sameValue(testResult[0], true, 'testResult[0]');

reportCompare(0, 0);
