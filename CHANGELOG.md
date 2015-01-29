2.0.2 / 2015-01-29
==================
  * Update `tape`, `jscs`
  * Bail out early if typeof is not "function".
  * Use `is-callable` to remove Object#toString checks.

2.0.1 / 2014-12-15
==================
  * Use `make-arrow-function` instead of a local module.

2.0.0 / 2014-12-03
==================
  * Fixing arrow function detection.
  * Update `tape`, `jscs`
  * Lock covert to v1.0.0, per https://github.com/substack/covert/issues/9
  * Clean up README
  * Adding `npm run lint`

1.0.2 / 2014-08-10
==================
  * Skip arrow function tests when arrow functions are not supported
  * Handle IE 9/10’s weird whitespacing
  * Update `tape`, `covert`

1.0.1 / 2013-12-07
==================
  * Fix functions with a faked toString
  * Update `tape`

1.0.0 / 2013-09-12
==================
  * Initial release.
