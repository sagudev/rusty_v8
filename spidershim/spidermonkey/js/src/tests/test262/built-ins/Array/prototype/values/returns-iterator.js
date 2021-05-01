// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 22.1.3.29
description: >
  The method should return an Iterator instance.
info: >
  22.1.3.29 Array.prototype.values ( )

  1. Let O be ToObject(this value).
  2. ReturnIfAbrupt(O).
  3. Return CreateArrayIterator(O, "value").

  22.1.5.1 CreateArrayIterator Abstract Operation

  ...
  2. Let iterator be ObjectCreate(%ArrayIteratorPrototype%, «‍[[IteratedObject]],
  [[ArrayIteratorNextIndex]], [[ArrayIterationKind]]»).
  ...
  6. Return iterator.
features: [Symbol.iterator]
---*/

var ArrayIteratorProto = Object.getPrototypeOf([][Symbol.iterator]());
var iter = [].values();

assert.sameValue(
  Object.getPrototypeOf(iter), ArrayIteratorProto,
  'The prototype of [].values() is %ArrayIteratorPrototype%'
);

reportCompare(0, 0);
