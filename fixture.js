import callerPath from './index.js';

function foo({depth = 0} = {}) {
	return callerPath({depth});
}

export default function fixture({depth = 0} = {}) {
	return foo({depth});
}
