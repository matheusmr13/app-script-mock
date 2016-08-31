describe('SpreadsheetApp', function(){
	before(function (){
		var chai = require('chai');
		global.assert = chai.assert;
		global.expect = chai.expect;

		global.DriveApp = require('./../src/DriveApp.js').DriveApp();
		global.SpreadsheetApp = require('./../src/SpreadsheetApp.js').SpreadsheetApp();
		global.Cell = require('./../src/SpreadsheetApp/Cell.js').Cell;
	});
	require('./SpreadsheetApp/test.js');
});