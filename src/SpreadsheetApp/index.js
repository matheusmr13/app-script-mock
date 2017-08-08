import Spreadsheet from './Spreadsheet';

class SpreadsheetApp {
	constructor(mock) {
		this.mock = mock;
	}
	static get BorderStyle() {
		return {
			DOTTED: 'DOTTED',
			DASHED: 'DASHED',
			SOLID: 'SOLID'
		};
	}

	static _setupMock(mock) {
		this.mock = mock;
	}

	static open(file) {
		return new Spreadsheet(this.mock || file);
	}
}

export default SpreadsheetApp;
