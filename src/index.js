import DriveApp from './DriveApp';
import SpreadsheetApp from './SpreadsheetApp';

const extendGlobal = (globals) => {
	Object.assign(globals, {
		DriveApp,
		SpreadsheetApp
	})
}

export default extendGlobal;
