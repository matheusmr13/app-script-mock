class Formulas {
	constructor(sheet) {
		this.sheet = sheet;
	}

	SUM(params) {
		let sum = 0;
		const notNumbersParams = [];

		if (params) {
			params.forEach((param) => {
				if (!isNaN(param)) {
					sum += parseInt(param, 10);
				} else {
					notNumbersParams.push(param);
				}
			});
		}

		if (!notNumbersParams.length) {
			return sum;
		}

		if (notNumbersParams) {
			const matrix = this.sheet.getCells();
			notNumbersParams.forEach((param) => {
				const parts = param.split(':');
				range = this.sheet.getRange(parts[0], parts[1]);
				matrix.forEach((line) => {
					line.forEach((column) => {
						sum += column.getNumberValue();
					});
				});
			});
		}

		return sum;
	}
};

export default Formulas;
