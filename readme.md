# caller-path

> Get the path of the caller function

## Install

```sh
npm install caller-path
```

## Usage

```js
// foo.js
import callerPath from 'caller-path';

export default function foo() {
	console.log(callerPath());
	//=> '/Users/sindresorhus/dev/unicorn/bar.js'
}
```

```js
// bar.js
import foo from './foo.js';
foo();
```

If the caller's [callsite](https://github.com/sindresorhus/callsites#api) object `getFileName` was not defined for some reason, it will return `undefined`.

## API

### callerPath(options?)

Get the path of the caller function.

##### depth

Type: `number`\
Default: `0`

The caller path depth, meaning how many levels we follow back on the stack trace.

For example:

```js
// foo.js
import callerPath from 'caller-path';

export default function foo() {
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
import foo from './foo.js';

export default function bar() {
	foo();
}
```

```js
// foobar.js
import bar from './bar.js';
bar();
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
