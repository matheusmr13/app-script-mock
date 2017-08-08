import assert from 'assert';
import extendGlobal from './../build/app-script-mock';

const test = (testName, tests) => {
	describe(testName, () => {
		before(() => {
			extendGlobal(global);
		});
		tests(assert);
	});
};

export default test;
