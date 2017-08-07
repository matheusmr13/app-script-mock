class Cell {
	constructor(value) {
		this.value = value;
		this.formula = '';
		this.backgroundColor = 'default';
		this.borderStyle = 'default';
		this.fontColor = 'default';
		this.fontSize = 'default';
		this.borderColor = 'default';
	}

	getValue() {
		return this.value;
	}

	getNumberValue() {
		if (isNaN(this.value)) {
			return 0;
		}
		return parseInt(this.value || 0, 10);
	}

	setValue(value) {
		this.value = value;
	}

	getFormula() {
		return this.formula;
	}

	setFormula(formula) {
		this.value = '';
		this.formula = formula;
	}

	getBackground() {
		return this.backgroundColor;
	}

	setBackground(backgroundColor) {
		this.backgroundColor = backgroundColor;
	}

	getBorderColor() {
		return this.borderColor;
	}

	setBorderColor(borderColor) {
		this.borderColor = borderColor;
	}

	getBorderStyle() {
		return this.borderStyle;
	}

	setBorderStyle(borderStyle) {
		this.borderStyle = borderStyle;
	}

	getFontColor() {
		return this.fontColor;
	}

	setFontColor(fontColor) {
		this.fontColor = fontColor;
	}

	getFontSize() {
		return this.fontSize;
	}

	setFontSize(fontSize) {
		this.fontSize = fontSize;
	}
}

exports.Cell = Cell;
