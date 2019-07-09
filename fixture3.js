'use strict';

function foo({depth = 0} = {}) {
	return require('./fixture2')({depth});
}

module.exports = ({depth = 0} = {}) => foo({depth});
