'use strict';
var assert = require('assert');
var path = require('path');
var fixture = require('./fixture');

it('should return the path of the caller module', function () {
	assert.strictEqual(path.basename(fixture()), 'test.js');
});
