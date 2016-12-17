function foo() {
	return require('./')();
}

module.exports = () => foo();
