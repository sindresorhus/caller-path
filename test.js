'use strict';
var path = require('path');
var test = require('ava');
var fixture = require('./fixture');
var fixture2 = require('./fixture2');
var fixture3 = require('./fixture3');

test(function (t) {
	t.assert(path.basename(fixture()) === 'test.js');
	t.assert(path.basename(fixture2()) === 'test.js');
	t.assert(path.basename(fixture3()) === 'test.js');
	t.end();
});
