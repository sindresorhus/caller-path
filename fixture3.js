import fixture2 from './fixture2.js';

function foo({depth = 0} = {}) {
	return fixture2({depth});
}

export default function fixture3({depth = 0} = {}) {
	return foo({depth});
}
