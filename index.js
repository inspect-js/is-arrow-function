var toStr = Object.prototype.toString;

module.exports = function isArrowFunction(fn) {
	"use strict";
	var fnStr = toStr.call(fn);
	var fnSrc = String(fn);
	return fnStr === '[object Function]' && fnSrc.indexOf('function') !== 0;
};

