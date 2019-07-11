# caller-path [![Build Status](https://travis-ci.org/sindresorhus/caller-path.svg?branch=master)](https://travis-ci.org/sindresorhus/caller-path)

> Get the path of the caller function

You have to use `'use strict';` in your code for this module to work correctly.


## Install

```
$ npm install --save caller-path
```


## Usage

```js
// foo.js
const callerPath = require('caller-path');

module.exports = () => {
	console.log(callerPath());
	//=> '/Users/sindresorhus/dev/unicorn/bar.js'
}
```

```js
// bar.js
const foo = require('./foo');
foo();
```

If the caller's [callsite](https://github.com/sindresorhus/callsites#api) object `getFileName` was not defined, it will return `undefined`.

## API

### callerPath(options?)

Get the path of the caller function.

##### depth

Type: `number`<br>
Default: `0`

The caller path depth, meaning how many levels we follow back on the stack trace.

For example:

```js
// foo.js
const callerPath = require('caller-path');

module.exports = () => {
	console.log(callerPath());
	//=> '/Users/sindresorhus/dev/unicorn/foobar.js'
	console.log(callerPath({depth: 1}));
	//=> '/Users/sindresorhus/dev/unicorn/bar.js'
	console.log(callerPath({depth: 2}));
	//=> '/Users/sindresorhus/dev/unicorn/foo.js'
}
```

```js
// bar.js
const foo = require('./foo');

module.exports = () => {
	foo();
}
```

```js
// foobar.js
const bar = require('./bar');
bar();
```
