#is-arrow-function <sup>[![Version Badge][npm-version-svg]][npm-url]</sup>

[![Build Status][3]][4] [![dependency status][5]][6] [![dev dependency status][7]][8]

[![npm badge][11]][npm-url]

[![browser support][9]][10]

npm module to determine if a function is an ES6 arrow function or not.

NOTE: Only works in Firefox at the moment.

## Example

```js
var isArrowFunction = require('is-arrow-function');
assert(!isArrowFunction(function () {}));
assert(!isArrowFunction(null));
assert(isArrowFunction((a, b) => a * b));
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[npm-url]: https://npmjs.org/package/is-arrow-function
[npm-version-svg]: http://vb.teelaun.ch/ljharb/node-is-arrow-function.svg
[3]: https://travis-ci.org/ljharb/node-is-arrow-function.svg
[4]: https://travis-ci.org/ljharb/node-is-arrow-function
[5]: https://david-dm.org/ljharb/node-is-arrow-function.svg
[6]: https://david-dm.org/ljharb/node-is-arrow-function
[7]: https://david-dm.org/ljharb/node-is-arrow-function/dev-status.svg
[8]: https://david-dm.org/ljharb/node-is-arrow-function#info=devDependencies
[9]: https://ci.testling.com/ljharb/node-is-arrow-function.png
[10]: https://ci.testling.com/ljharb/node-is-arrow-function
[11]: https://nodei.co/npm/is-arrow-function.png?downloads=true&stars=true

