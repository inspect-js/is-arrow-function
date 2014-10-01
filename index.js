'use strict';

var toStr = Object.prototype.toString;
var fnToStr = Function.prototype.toString;
var isFnRegex = /^\s*function/;

module.exports = function isArrowFunction(fn) {
	var fnStr = toStr.call(fn);
	return fnStr === '[object Function]' && !isFnRegex.test(fnToStr.call(fn));
};

