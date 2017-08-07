import Range from './Range';
import Cell from './Cell';
import Formulas from './Formulas';

class Sheet {
	constructor(matrix) {
		this.matrix = matrix;
	}

	getRange(row, col, lines = 1, cols = 1) {
		if (!row ||
			!col ||
			row <= 0 ||
			col <= 0 ||
			lines > this.matrix.length ||
			cols > this.matrix[0].length) {
			throw new Error('Invalid params to range.');
		}
		const newMatrix = [
			[]
		];
		for (let i = 0; i < lines; i += 1) {
			newMatrix[i] = [];
			for (let j = 0; j < cols; j += 1) {
				newMatrix[i][j] = this.matrix[i + row + -1][j + col + -1];
			}
		}
		return new Range(newMatrix);
	}

	insertRowsBefore(row, qty) {
		// FIXME improve way of inserting lines in the middle of matrix
		const newMatrix = [];
		for (let i = 0; i < row - 1; i += 1) {
			newMatrix.push(this.matrix[i]);
		}
		for (let i = 0; i < qty; i += 1) {
			newMatrix.push(Array(this.matrix[0].length).fill(new Cell('')));
		}
		for (let i = row - 1; i < this.matrix.length; i += 1) {
			newMatrix.push(this.matrix[i]);
		}

		this.matrix = newMatrix;
	}

	getMaxRows() {
		return this.matrix.length;
	}

	getMaxColumns() {
		return this.matrix[0].length;
	}

	processFormulas() {
		const processFormula = (cell, formulas) => {
			if (cell.getFormula() && !cell.getValue()) {
				cell.setFormula(cell.getFormula().trim());
				const parts = cell.getFormula().split('(');
				const formula = parts[0].substring(1);
				const params = parts[1].substring(0, parts[1].length - 1).split(',');
				const formulaFunction = formulas[formula];
				if (!formulaFunction) {
					throw new Error(`Not testable function: ${formula}`);
				} else {
					cell.setValue(formulaFunction(params));
				}
			}
		};

		const formulas = new Formulas(this);
		this.matrix.forEach((line) => {
			line.forEach((cell) => {
				processFormula(cell, formulas);
			});
		});
		return this;
	}
}

exports.Sheet = Sheet;
