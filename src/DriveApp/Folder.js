class Folder {
	constructor(id) {
		this.id = id;
		this.files = [];
	}

	getId() {
		return this.id;
	}

	addFile(file) {
		this.files.push(file);
	}

	getFiles() {
		return this.files;
	}
}

export default Folder;
