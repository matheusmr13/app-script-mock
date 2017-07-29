import DriveApp from './DriveApp';
import SpreadsheetApp from './SpreadsheetApp';

export default extendGlobal = (globals) => {
	console.info(DriveApp)
	Object.assign(globals, {
		DriveApp
	})
}