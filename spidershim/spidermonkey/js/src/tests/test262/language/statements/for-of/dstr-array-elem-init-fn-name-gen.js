// This file was procedurally generated from the following sources:
// - src/dstr-assignment/array-elem-init-fn-name-gen.case
// - src/dstr-assignment/default/for-of.template
/*---
description: Assignment of function `name` attribute (GeneratorExpression) (For..of statement)
esid: sec-for-in-and-for-of-statements-runtime-semantics-labelledevaluation
es6id: 13.7.5.11
features: [generators, destructuring-binding]
flags: [generated]
includes: [propertyHelper.js]
info: |
    IterationStatement :
      for ( LeftHandSideExpression of AssignmentExpression ) Statement

    1. Let keyResult be the result of performing ? ForIn/OfHeadEvaluation(« »,
       AssignmentExpression, iterate).
    2. Return ? ForIn/OfBodyEvaluation(LeftHandSideExpression, Statement,
       keyResult, assignment, labelSet).

    13.7.5.13 Runtime Semantics: ForIn/OfBodyEvaluation

    [...]
    4. If destructuring is true and if lhsKind is assignment, then
       a. Assert: lhs is a LeftHandSideExpression.
       b. Let assignmentPattern be the parse of the source text corresponding to
          lhs using AssignmentPattern as the goal symbol.
    [...]

    AssignmentElement[Yield] : DestructuringAssignmentTarget Initializeropt
    [...] 7. If Initializer is present and value is undefined and
       IsAnonymousFunctionDefinition(Initializer) and IsIdentifierRef of
       DestructuringAssignmentTarget are both true, then
       a. Let hasNameProperty be HasOwnProperty(v, "name").
       b. ReturnIfAbrupt(hasNameProperty).
       c. If hasNameProperty is false, perform SetFunctionName(v,
          GetReferencedName(lref)).

---*/
var xGen, gen;

var counter = 0;

for ([ xGen = function* x() {}, gen = function*() {} ] of [[]]) {
  assert.notSameValue(xGen.name, 'xGen');

  assert.sameValue(gen.name, 'gen');
  verifyNotEnumerable(gen, 'name');
  verifyNotWritable(gen, 'name');
  verifyConfigurable(gen, 'name');
  counter += 1;
}

assert.sameValue(counter, 1);

reportCompare(0, 0);
