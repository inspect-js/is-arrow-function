var toStr = Object.prototype.toString;
var fnToStr = Function.prototype.toString;

module.exports = function isArrowFunction(fn) {
	"use strict";
	var fnStr = toStr.call(fn);
	return fnStr === '[object Function]' && fnToStr.call(fn).indexOf('function') !== 0;
};

