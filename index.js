'use strict';

var isCallable = require('is-callable');
var fnToStr = Function.prototype.toString;
var isNonArrowFnRegex = /^\s*function/;
var isArrowFnWithParensRegex = /^\([^\)]*\) *=>/;
var isArrowFnWithoutParensRegex = /^[^=]*=>/;

module.exports = function isArrowFunction(fn) {
	var type = typeof fn;
  if (!isCallable(fn) && type !== 'string') { return false; }
  var fnStr = type === 'string' ? fn : fnToStr.call(fn);
  return fnStr.length > 0 &&
    !isNonArrowFnRegex.test(fnStr) &&
    (isArrowFnWithParensRegex.test(fnStr) || isArrowFnWithoutParensRegex.test(fnStr));
};
