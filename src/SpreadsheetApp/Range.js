class Range {
	constructor(matrix) {
		this.matrix = matrix;
	}

	getValues() {
		const values = [];
		this.matrix.forEach(line =>
			line.forEach(cell =>
				values.push(cell.getValue())
			)
		);
		return values;
	}

	setBackground(background) { this.setSomeValue(background, 'Background'); }
	setValue(value) { this.setSomeValue(value, 'Value'); }
	setFormula(formula) { this.setSomeValue(formula, 'Formula'); }
	setFontSize(fontSize) { this.setSomeValue(fontSize, 'FontSize'); }
	setFontColor(fontColor) { this.setSomeValue(fontColor, 'FontColor'); }
	setBorder(top, left, bottom, right, vertical, horizontal, color, style) {
		this.setSomeValue(color, 'BorderColor');
		this.setSomeValue(style, 'BorderStyle');
	}

	setSomeValue(value, propertie) {
		this.matrix.forEach((line) => {
			line.forEach((cell) => {
				cell[`set${propertie}`](value);
			});
		});
	}
}

export default Range;
