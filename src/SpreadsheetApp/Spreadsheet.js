import Sheet from './Sheet';

class Spreadsheet {
	constructor(mock) {
		this.sheets = [new Sheet(mock)];
	}

	getSheets() {
		return this.sheets;
	}
}
export default Spreadsheet;
