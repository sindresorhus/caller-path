'use strict';

function foo() {
	return require('./fixture2')();
}

module.exports = function () {
	return foo();
};
