'use strict';
const callerCallsite = require('caller-callsite');

module.exports = ({depth = 0} = {}) => callerCallsite({depth}).getFileName();
