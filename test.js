import path from 'path';
import test from 'ava';
import fixture from './fixture';
import fixture2 from './fixture2';
import fixture3 from './fixture3';
import fixture4 from './fixture4';

test(t => {
	t.is(path.basename(fixture()), 'test.js');
	t.is(path.basename(fixture2()), 'test.js');
	t.is(path.basename(fixture3()), 'test.js');
	t.is(path.basename(fixture4()), 'test.js');
});
