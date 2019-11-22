import path from 'path';
import test from 'ava';
import fixture from './fixture';
import fixture2 from './fixture2';
import fixture3 from './fixture3';

test('main', t => {
	t.is(path.basename(fixture()), 'test.js');
	t.is(path.basename(fixture2()), 'test.js');
	t.is(path.basename(fixture3()), 'test.js');
	t.is(path.basename(fixture3({depth: 1})), 'test.js');
	t.is(path.basename(fixture3({depth: 2})), 'fixture3.js');
	t.is(path.basename(fixture3({depth: 3})), 'fixture2.js');
	t.is(path.basename(fixture3({depth: 4})), 'fixture.js');
	t.is(path.basename(fixture3({depth: 5})), 'index.js');
});
