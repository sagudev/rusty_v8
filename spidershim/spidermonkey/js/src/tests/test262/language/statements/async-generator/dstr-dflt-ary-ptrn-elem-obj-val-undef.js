// |reftest| skip-if(release_or_beta) -- async-iteration is not released yet
// This file was procedurally generated from the following sources:
// - src/dstr-binding/ary-ptrn-elem-obj-val-undef.case
// - src/dstr-binding/error/async-gen-func-decl-dflt.template
/*---
description: Nested object destructuring with a value of `undefined` (async generator function declaration (default parameter))
esid: sec-asyncgenerator-definitions-instantiatefunctionobject
features: [async-iteration]
flags: [generated]
info: |
    AsyncGeneratorDeclaration : async [no LineTerminator here] function * BindingIdentifier
        ( FormalParameters ) { AsyncGeneratorBody }

        [...]
        3. Let F be ! AsyncGeneratorFunctionCreate(Normal, FormalParameters, AsyncGeneratorBody,
            scope, strict).
        [...]

    13.3.3.6 Runtime Semantics: IteratorBindingInitialization

    BindingElement : BindingPattern Initializeropt

    1. If iteratorRecord.[[done]] is false, then
       [...]
       e. Else
          i. Let v be IteratorValue(next).
          [...]
    4. Return the result of performing BindingInitialization of BindingPattern
       with v and environment as the arguments.

    13.3.3.5 Runtime Semantics: BindingInitialization

    BindingPattern : ObjectBindingPattern

    1. Let valid be RequireObjectCoercible(value).
    2. ReturnIfAbrupt(valid).
---*/


async function* f([{ x }] = []) {
  
};

assert.throws(TypeError, function() {
  f();
});

reportCompare(0, 0);
