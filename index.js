'use strict';

var toStr = Object.prototype.toString;
var fnToStr = Function.prototype.toString;
var isNonArrowFnRegex = /^\s*function/;
var isArrowFnWithParensRegex = /^\([^\)]*\) *=>/;
var isArrowFnWithoutParensRegex = /^[^=]*=>/;

module.exports = function isArrowFunction(fn) {
	if (typeof fn !== 'function') { return false; }
	var typeStr = toStr.call(fn);
	var fnStr = typeStr === '[object Function]' ? fnToStr.call(fn) : '';
	return fnStr.length > 0
		&& !isNonArrowFnRegex.test(fnStr)
		&& (isArrowFnWithParensRegex.test(fnStr) || isArrowFnWithoutParensRegex.test(fnStr));
};

