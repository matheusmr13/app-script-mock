import Test from './baseTest';

Test('Global scope', (assert) => {
	it('should import DriveApp to global test scope', () => {
		assert.notEqual('undefined', typeof DriveApp);
	});
	it('should import SpreadsheetApp to global test scope', () => {
		assert.notEqual('undefined', typeof SpreadsheetApp);
	});
});
