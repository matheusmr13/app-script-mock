var extendGlobal = require('build/app-script-mock.js')
var assert = require('assert')

describe('Globals being import correcly', () => {
	before(function (){
		extendGlobal(global)
	});
	describe('DriveApp', () => {
		it('driveapp', () => {
			assert.equal('object', typeof global.DriveApp)
			assert.equal('object', typeof global.SpreadsheetApp)
			assert.equal('undefined', typeof global.hue)
		})
	})
});