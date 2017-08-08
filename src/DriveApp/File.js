class File {
	constructor(id) {
		this.id = id;
	}

	setSharing(accessType, permissionType) {
		this.accessType = accessType;
		this.permissionType = permissionType;
	}

	getId() {
		return this.id;
	}

	makeCopy(name, folder) {
		const newFile = Object.assign(Object.create(Object.getPrototypeOf(this)), this);
		newFile.setName(name);
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
