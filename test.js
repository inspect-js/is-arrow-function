"use strict";

var test = require('tape');
var isArrowFunction = require('./index');

test('returns false for non-functions', function (t) {
	var nonFuncs = [
		true,
		false,
		null,
		undefined,
		{},
		[],
		/a/g,
		'string',
		42,
		new Date()
	];
	t.plan(nonFuncs.length);
	nonFuncs.forEach(function (nonFunc) {
		t.notOk(isArrowFunction(nonFunc), nonFunc + ' is not a function');
	});
	t.end();
});

test('returns false for non-arrow functions', function (t) {
	var func = function () {};
	t.notOk(isArrowFunction(func), 'anonymous function is not an arrow function');

	var namedFunc = function foo() {};
	t.notOk(isArrowFunction(namedFunc), 'named function is not an arrow function');

	if (typeof window !== 'undefined') {
		t.notOk(isArrowFunction(window.alert), 'window.alert is not an arrow function');
	}
	t.end();
});

var makeArrowFunction = function () {
	return Function('return (a, b) => a * b;')();
};
var arrowFunc;
try { arrowFunc = makeArrowFunction(); } catch (e) {}

if (arrowFunc) {
	test('returns true for arrow functions', function (t) {
		t.ok(isArrowFunction(arrowFunc), 'arrow function is arrow function');
		t.end();
	});
} else {
	console.log('This environment does not support ES6 arrow functions. Please run `node --harmony`, or use a supporting browser.');
}

