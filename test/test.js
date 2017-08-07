import assert from 'assert';
import extendGlobal from './../build/app-script-mock';

describe('Globals being import correcly', () => {
	before(() => {
		extendGlobal(global);
	});
	describe('DriveApp', () => {
		it('driveapp', () => {
			assert.notEqual('undefined', typeof global.DriveApp);
			assert.notEqual('undefined', typeof global.SpreadsheetApp);
		});
	});
});
