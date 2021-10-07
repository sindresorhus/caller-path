export interface Options {
	/**
	The caller path depth, meaning how many levels we follow back on the stack trace.

	@default 0

	@example
	```
	// foo.ts
	import callerPath from 'caller-path';

	export default function foo() {
		console.log(callerPath());
		//=> '/Users/sindresorhus/dev/unicorn/foobar.ts'
		console.log(callerPath({depth: 1}));
		//=> '/Users/sindresorhus/dev/unicorn/bar.ts'
		console.log(callerPath({depth: 2}));
		//=> '/Users/sindresorhus/dev/unicorn/foo.ts'
	}

	// bar.ts
	import foo from './foo.js';

	export default function bar() => {
		foo();
	}

	// foobar.ts
	import bar from './bar.js';
	bar();
	```
	*/
	readonly depth?: number;
}

/**
Get the path of the caller function.

If the caller's [callsite](https://github.com/sindresorhus/callsites#api) object `getFileName` was not defined for some reason, it will return `undefined`.

@example
```
// foo.ts
import callerPath from 'caller-path';

export default function foo() {
	console.log(callerPath());
	//=> '/Users/sindresorhus/dev/unicorn/bar.ts'
}

// bar.ts
import foo from './foo.js';
foo();
```
*/
export default function callerPath(options?: Options): string | undefined;

