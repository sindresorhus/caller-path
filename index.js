'use strict';
var callerCallsite = require('caller-callsite');

module.exports = function () {
	return callerCallsite().getFileName();
};
