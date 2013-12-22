"use strict";

var makeArrowFunction = function () {
    return Function('return (a, b) => a * b;')();
};
var arrowFunc;
try { arrowFunc = makeArrowFunction(); } catch (e) {}

module.exports = arrowFunc;

