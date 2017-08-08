class Iterator<T> {
	constructor(list: Array<T>) {
		this.list = list || [];
		this.index = 0;
	}

	hasNext() {
		return (this.list.length > this.index);
	}

	next() {
		const i = this.index;
		this.index += 1;
		return this.list[i];
	}
}

export default Iterator;
