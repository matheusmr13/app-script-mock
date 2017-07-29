import DriveApp from './DriveApp';
import SpreadsheetApp from './SpreadsheetApp';

export default extendGlobal = (globals) => {
	Object.assign(globals, {
		DriveApp,
		SpreadsheetApp
	})
}