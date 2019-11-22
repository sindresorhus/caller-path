'use strict';

function foo({depth = 0} = {}) {
	return require('.')({depth});
}

module.exports = ({depth = 0} = {}) => foo({depth});
