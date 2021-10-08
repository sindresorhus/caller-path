import callerCallsite from 'caller-callsite';

export default function callerpath({depth = 0} = {}) {
	const callsite = callerCallsite({depth});
	return callsite && callsite.getFileName();
}
