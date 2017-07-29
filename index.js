'use strict';

var File = function File(newId) {
	var properties = {
		id: newId || '',
		name: ''
	};

	this.setSharing = function () {};
	this.getId = function () {
		return properties.id;
	};
	this.makeCopy = function (name, folder) {
		var newFile = new File();
		newFile._setProperties(properties);
		newFile.setName(name);
		folder.addFile(newFile);
		return newFile;
	};
	this.getName = function () {
		return properties.name;
	};
	this.setName = function (newName) {
		properties.name = newName;
	};
	this._setProperties = function (newProperties) {
		for (var propertie in newProperties) {
			properties[propertie] = newProperties[propertie];
		}
	};
};

exports.File = File;
'use strict';

var Folder = function Folder(newId) {
	var files = [],
	    id = newId || '';
	this.getId = function () {
		return id;
	};
	this.addFile = function (file) {
		files.push(file);
	};
	this.getFiles = function () {
		return files;
	};
};

exports.Folder = Folder;
'use strict';

var File = require('./DriveApp/File.js').File;
var Folder = require('./DriveApp/Folder.js').Folder;

var DriveApp = function DriveApp() {
	return {
		Access: {
			ANYONE: 'ANYONE',
			ANYONE_WITH_LINK: 'ANYONE_WITH_LINK',
			DOMAIN: 'DOMAIN',
			DOMAIN_WITH_LINK: 'DOMAIN_WITH_LINK',
			PRIVATE: 'PRIVATE'
		},
		Permission: {
			COMMENT: 'COMMENT',
			EDIT: 'EDIT',
			NONE: 'NONE',
			OWNER: 'OWNER',
			VIEW: 'VIEW'
		},
		getFileById: function getFileById(id) {
			return new File(id);
		},
		getFolderById: function getFolderById(id) {
			return new Folder(id);
		}
	};
};
exports.DriveApp = DriveApp;
'use strict';

var Cell = function Cell(firstValue) {
	var value = firstValue || '',
	    formula = '',
	    backgroundColor = 'default',
	    borderStyle = 'default',
	    fontColor = 'default',
	    fontSize = 'default',
	    borderColor = 'default';

	var links = {};

	this.getValue = function () {
		return value + '';
	};
	this.getNumberValue = function () {
		if (isNaN(value)) {
			return 0;
		} else {
			return parseInt(value || 0);
		}
	};
	this.setValue = function (newValue) {
		value = newValue;
	};
	this.getFormula = function () {
		return formula;
	};
	this.setFormula = function (newFormula) {
		value = '';
		formula = newFormula;
	};
	this.getBackground = function () {
		return backgroundColor;
	};
	this.setBackground = function (newBackground) {
		backgroundColor = newBackground;
	};
	this.getBorderColor = function () {
		return borderColor;
	};
	this.setBorderColor = function (newBorderColor) {
		borderColor = newBorderColor;
	};
	this.getBorderStyle = function () {
		return borderStyle;
	};
	this.setBorderStyle = function (newBorderStyle) {
		borderStyle = newBorderStyle;
	};
	this.getFontColor = function () {
		return fontColor;
	};
	this.setFontColor = function (newFontColor) {
		fontColor = newFontColor;
	};
	this.getFontSize = function () {
		return fontSize;
	};
	this.setFontSize = function (newFontSize) {
		fontSize = newFontSize;
	};
	this._configureLinks = function (newLinks) {
		links = newLinks;
	};
	this._left = function () {
		return links.left;
	};
	this._bottom = function () {
		return links.bottom;
	};
	this._right = function () {
		return links.right;
	};
	this._top = function () {
		return links.top;
	};
};

exports.Cell = Cell;
'use strict';

var Formulas = function Formulas(sheet) {

	return {
		SUM: function SUM(params) {
			var sum = 0,
			    range = sheet.getRange(1, 1, sheet.getMaxRows(), sheet.getMaxColumns());

			if (params) {
				var oldParams = params;
				params = [];
				for (var i = 0; i < oldParams.length; i++) {
					if (!isNaN(oldParams[i])) {
						sum += parseInt(oldParams[i]);
					} else {
						params.push(oldParams[i]);
					}
				}
			}

			if (!params.length) {
				return sum;
			}
			if (typeof params == 'string' && params && isNaN(params[0])) {
				var parts = number1.split(':');
				range = sheet.getRange(params[0], params[1]);
			}
			var matrix = range.getCells();

			for (var i = 0; i < matrix.length; i++) {
				for (var j = 0; j < matrix[i].length; j++) {
					sum += matrix[i][j].getNumberValue();
				}
			}
			return sum;
		}
	};
};

exports.Formulas = Formulas;
'use strict';

var Range = function Range(myMatrix) {
	var matrix = myMatrix || [[]];
	this.getValues = function () {
		var values = [];
		for (var i = 0; i < matrix.length; i++) {
			values[i] = [];
			for (var j = 0; j < matrix[i].length; j++) {
				values[i][j] = matrix[i][j].getValue();
			}
		}
		return values;
	};

	this._getCells = function () {
		return matrix;
	};
	this.copyTo = function (anotherRange) {
		var firstCell = anotherRange._getCells()[0][0];
		var actualLineCell = firstCell;
		for (var i = 0; i < matrix.length; i++) {
			actualCell = actualLineCell;
			for (var j = 0; j < matrix[0].length; j++) {
				actualCell.setValue(matrix[i][j].getValue());
				actualCell = actualCell._right();
			}
			actualLineCell = actualLineCell._bottom();
		}
	};

	this.setBackground = function (background) {
		setSomeValue(background, 'Background');
	};
	this.setValue = function (value) {
		setSomeValue(value, 'Value');
	};
	this.setFormula = function (formula) {
		setSomeValue(formula, 'Formula');
	};
	this.setFontSize = function (newFontSize) {
		setSomeValue(newFontSize, 'FontSize');
	};
	this.setFontColor = function (color) {
		setSomeValue(color, 'FontColor');
	};
	this.setBorder = function (top, left, bottom, right, vertical, horizontal, color, style) {
		setSomeValue(color, 'BorderColor');
		setSomeValue(style, 'BorderStyle');
	};
	var setSomeValue = function setSomeValue(value, propertie) {
		for (var i = 0; i < matrix.length; i++) {
			for (var j = 0; j < matrix[0].length; j++) {
				matrix[i][j]['set' + propertie](value);
			}
		}
	};

	this.getCells = function () {
		return matrix;
	};
};

exports.Range = Range;
'use strict';

var Range = require('./Range').Range;
var Cell = require('./Cell').Cell;
var Formulas = require('./Formulas').Formulas;
var Sheet = function Sheet(myMatrix) {
	var matrix = myMatrix || [[]];

	var setupMatrixLinks = function setupMatrixLinks() {
		for (var i = 0; i < matrix.length; i++) {
			for (var j = 0; j < matrix[i].length; j++) {
				matrix[i][j]._configureLinks({
					top: i != 0 ? matrix[i - 1][j] : undefined,
					right: j != matrix[i].length - 1 ? matrix[i][j + 1] : undefined,
					bottom: i != matrix.length - 1 ? matrix[i + 1][j] : undefined,
					left: j != 0 ? matrix[i][j - 1] : undefined
				});
			}
		}
	};

	setupMatrixLinks();
	this.getRange = function (row, col, lines, cols) {
		lines = lines || 1;
		cols = cols || 1;
		if (!row || !col || row <= 0 || col <= 0 || lines > matrix.length || cols > matrix[0].length) {
			throw new Error('Invalid params to range.');
		}
		var newMatrix = [[]];
		for (var i = 0; i < lines; i++) {
			newMatrix[i] = [];
			for (var j = 0; j < cols; j++) {
				newMatrix[i][j] = matrix[i + row - 1][j + col - 1];
			}
		}
		return new Range(newMatrix);
	};

	var createRow = function createRow(qty) {
		var row = [];
		for (var i = 0; i < qty; i++) {
			row.push(new Cell(''));
		}
		return row;
	};

	this.insertRowsBefore = function (row, qty) {
		var newMatrix = [];
		for (var i = 0; i < row - 1; i++) {
			newMatrix.push(matrix[i]);
		}
		for (var i = 0; i < qty; i++) {
			newMatrix.push(createRow(matrix[0].length));
		}
		for (var i = row - 1; i < matrix.length; i++) {
			newMatrix.push(matrix[i]);
		}

		matrix = newMatrix;
	};

	this.getMaxRows = function () {
		return matrix.length;
	};

	this.getMaxColumns = function () {
		return matrix[0].length;
	};

	this._processFormula = function (cell, formulas) {
		if (cell.getFormula() && !cell.getValue()) {
			cell.setFormula(cell.getFormula().trim());
			var parts = cell.getFormula().split('('),
			    formula = parts[0].substring(1),
			    params = parts[1].substring(0, parts[1].length - 1).split(','),
			    formulaFunction = formulas[formula];
			if (!formulaFunction) {
				throw new Error('Not testable function: ' + formula);
			} else {
				cell.setValue(formulaFunction(params));
			}
		}
	};

	this._processFormulas = function () {
		var formulas = Formulas(this);
		for (var i = 0; i < matrix.length; i++) {
			for (var j = 0; j < matrix[i].length; j++) {
				this._processFormula(matrix[i][j], formulas);
			}
		}
		return this;
	};
};

exports.Sheet = Sheet;
'use strict';

var Sheet = require('./Sheet.js').Sheet;
var Spreadsheet = function Spreadsheet(mock) {
	var sheets = [new Sheet(mock)];

	this.getSheets = function () {
		return sheets;
	};
};
exports.Spreadsheet = Spreadsheet;
'use strict';

var Spreadsheet = require('./SpreadsheetApp/Spreadsheet.js').Spreadsheet;
var SpreadsheetApp = function SpreadsheetApp(mock) {
	var _mock = mock;
	return {
		_setupMock: function _setupMock(mock) {
			_mock = mock;
		},
		BorderStyle: {
			DOTTED: 'DOTTED',
			DASHED: 'DASHED',
			SOLID: 'SOLID'
		},
		open: function open(file) {
			return new Spreadsheet(_mock || file);
		}
	};
};

exports.SpreadsheetApp = SpreadsheetApp;
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _DriveApp = require('./DriveApp');

var _DriveApp2 = _interopRequireDefault(_DriveApp);

var _SpreadsheetApp = require('./SpreadsheetApp');

var _SpreadsheetApp2 = _interopRequireDefault(_SpreadsheetApp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = extendGlobal = function extendGlobal(globals) {
	Object.assign(globals, {
		DriveApp: _DriveApp2.default,
		SpreadsheetApp: _SpreadsheetApp2.default
	});
};
