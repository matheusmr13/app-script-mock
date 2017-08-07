class File {
	constructor(id) {
		this.id = id;
	}

	setSharing() {
		console.info(`Not implemented${this}`);
	}

	getId() {
		return this.id;
	}

	makeCopy(name, folder) {
		const newFile = Object.assign(Object.create(Object.getPrototypeOf(this)), this);
		folder.addFile(newFile);
		return newFile;
	}

	getName() {
		return this.name;
	}

	setName(name) {
		this.name = name;
	}
}

export default File;
