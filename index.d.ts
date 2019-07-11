declare namespace callerPath {
	interface Options {
		/**
		The caller path depth, meaning how many levels we follow back on the stack trace.

		@default 0

		@example
		```
		// foo.ts
		import callerPath = require('caller-path');

		module.exports = () => {
			console.log(callerPath();
			//=> '/Users/sindresorhus/dev/unicorn/foobar.ts'
			console.log(callerPath({depth: 1});
			//=> '/Users/sindresorhus/dev/unicorn/bar.ts'
			console.log(callerPath({depth: 2});
			//=> '/Users/sindresorhus/dev/unicorn/foo.ts'
		}

		// bar.ts
		import foo = require('./foo');

		module.exports = () => {
			foo();
		}

		// foobar.ts
		import bar = require('./bar');
		bar();
		```
		*/
		readonly depth?: number;
	}
}

/**
Get the path of the caller function.

@example
```js
// foo.ts
const callerPath = require('caller-path');

export default () => {
	console.log(callerPath();
	//=> '/Users/sindresorhus/dev/unicorn/bar.ts'
}

// bar.ts
import foo from './foo';
foo();
```
*/
declare function callerPath(options?: callerPath.Options): string | undefined;

export = callerPath;
