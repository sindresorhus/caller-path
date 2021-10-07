import {expectType, expectError} from 'tsd';
import callerPath from './index.js';

expectType<string | undefined>(callerPath());
expectType<string | undefined>(callerPath({depth: 1}));
expectError<string>(callerPath());
