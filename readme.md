# caller-path [![Build Status](https://travis-ci.org/sindresorhus/caller-path.svg?branch=master)](https://travis-ci.org/sindresorhus/caller-path)

> Get the path of the caller function

You have to use `'use strict';` in your code for this module to work correctly.


## Install

```
$ npm install caller-path
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


---

<div align="center">
	<b>
		<a href="https://tidelift.com/subscription/pkg/npm-caller-path?utm_source=npm-caller-path&utm_medium=referral&utm_campaign=readme">Get professional support for this package with a Tidelift subscription</a>
	</b>
	<br>
	<sub>
		Tidelift helps make open source sustainable for maintainers while giving companies<br>assurances about security, maintenance, and licensing for their dependencies.
	</sub>
</div>
