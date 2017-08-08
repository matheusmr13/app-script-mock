import uuid from './../utils/uuid';

class Folder {
	constructor(name) {
		this.id = uuid();
		this.name = name;
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
