// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 9.5.5
description: >
    Throws a TypeError exception if trap result is undefined and target is not
    extensible
info: >
    [[GetOwnProperty]] (P)

    ...
    14. If trapResultObj is undefined, then
        ...
        e. If ToBoolean(extensibleTarget) is false, throw a TypeError exception.
    ...
---*/

var target = {
    foo: 1
};

var p = new Proxy(target, {
    getOwnPropertyDescriptor: function(t, prop) {
        return;
    }
});

Object.preventExtensions(target);

assert.throws(TypeError, function() {
    Object.getOwnPropertyDescriptor(p, "foo");
});

reportCompare(0, 0);
