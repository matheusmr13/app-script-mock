const DriveApp = require('./DriveApp');
const SpreadsheetApp = require('./SpreadsheetApp');

const extendGlobal = (globals) => {
	Object.assign(globals, {
		DriveApp,
		SpreadsheetApp
	})
}

module.exports = extendGlobal;
