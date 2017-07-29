/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DriveApp__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__DriveApp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__DriveApp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SpreadsheetApp__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SpreadsheetApp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__SpreadsheetApp__);



/* harmony default export */ __webpack_exports__["default"] = (extendGlobal = (globals) => {
	console.info(__WEBPACK_IMPORTED_MODULE_0__DriveApp___default.a)
	Object.assign(globals, {
		DriveApp: __WEBPACK_IMPORTED_MODULE_0__DriveApp___default.a
	})
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var File = __webpack_require__(2).File;
var Folder = __webpack_require__(3).Folder;

var DriveApp = function () {
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
		getFileById: function (id) {
			return new File(id);
		},
		getFolderById: function (id) {
			return new Folder(id);
		}
	};
};
exports.DriveApp = DriveApp;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

var File = function (newId) {
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


/***/ }),
/* 3 */
/***/ (function(module, exports) {

var Folder = function (newId) {
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


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var Spreadsheet = __webpack_require__(5).Spreadsheet;
var SpreadsheetApp = function (mock) {
	var _mock = mock;
	return {
		_setupMock: function(mock) {
			_mock = mock;
		},
		BorderStyle: {
			DOTTED: 'DOTTED',
			DASHED: 'DASHED',
			SOLID: 'SOLID'
		},
		open: function (file) {
			return new Spreadsheet(_mock || file);
		}
	}
};

exports.SpreadsheetApp = SpreadsheetApp;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var Sheet = __webpack_require__(6).Sheet
var Spreadsheet = function (mock) {
	var sheets = [new Sheet(mock)];

	this.getSheets = function () {
		return sheets;
	};
};
exports.Spreadsheet = Spreadsheet;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var Range = __webpack_require__(7).Range;
var Cell = __webpack_require__(8).Cell;
var Formulas = __webpack_require__(9).Formulas;
var Sheet = function (myMatrix) {
	var matrix = myMatrix || [
		[]
	];

	var setupMatrixLinks = function () {
		for (var i = 0; i < matrix.length; i++) {
			for (var j = 0; j < matrix[i].length; j++) {
				matrix[i][j]._configureLinks({
					top: i != 0 ? matrix[i - 1][j] : undefined,
					right: j != (matrix[i].length - 1) ? matrix[i][j + 1] : undefined,
					bottom: i != (matrix.length - 1) ? matrix[i + 1][j] : undefined,
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
		var newMatrix = [
			[]
		];
		for (var i = 0; i < lines; i++) {
			newMatrix[i] = [];
			for (var j = 0; j < cols; j++) {
				newMatrix[i][j] = matrix[i + row - 1][j + col - 1];
			}
		}
		return new Range(newMatrix);
	};

	var createRow = function (qty) {
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


/***/ }),
/* 7 */
/***/ (function(module, exports) {

var Range = function (myMatrix) {
	var matrix = myMatrix || [
		[]
	];
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
	var setSomeValue = function (value, propertie) {
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


/***/ }),
/* 8 */
/***/ (function(module, exports) {

var Cell = function (firstValue) {
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
	this.getNumberValue = function() {
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


/***/ }),
/* 9 */
/***/ (function(module, exports) {

var Formulas = function (sheet) {

	return {
		SUM: function (params) {
			var sum = 0,
				range = sheet.getRange(1,1,sheet.getMaxRows(),sheet.getMaxColumns());

			if (params) {
				var oldParams = params;
				params = []
				for (var i =0;i<oldParams.length;i++) {
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
	}
};

exports.Formulas = Formulas;


/***/ })
/******/ ]);