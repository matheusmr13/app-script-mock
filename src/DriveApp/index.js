// @flow
import File from './File';
import Folder from './Folder';

class DriveApp {
	static get Access() {
		return {
			ANYONE: 'ANYONE',
			ANYONE_WITH_LINK: 'ANYONE_WITH_LINK',
			DOMAIN: 'DOMAIN',
			DOMAIN_WITH_LINK: 'DOMAIN_WITH_LINK',
			PRIVATE: 'PRIVATE'
		};
	}

	static get Permission() {
		return {
			COMMENT: 'COMMENT',
			EDIT: 'EDIT',
			NONE: 'NONE',
			OWNER: 'OWNER',
			VIEW: 'VIEW'
		};
	}

	static getFileById(id) {
		return new File(id);
	}

	static getFolderById(id) {
		return new Folder(id);
	}

	static addFile(child: File): Folder {
		console.info(child);
	}
	static addFolder(child: Folder): Folder {

	}
	static continueFileIterator(continuationToken: String): FileIterator {

	}
	static continueFolderIterator(continuationToken: String): FolderIterator {

	}
	static createFile(blob: BlobSource): File {

	}
	static createFile(name: String, content: String): File {

	}
	static createFile(name: String, content: String, mimeType: String): File {

	}
	static createFolder(name: String): Folder {

	}
	static getFileById(id: String): File {

	}
	static getFiles(): FileIterator {

	}
	static getFilesByName(name: String): FileIterator {

	}
	static getFilesByType(mimeType: String): FileIterator {

	}
	static getFolderById(id: String): Folder {

	}
	static getFolders(): FolderIterator {

	}
	static getFoldersByName(name: String): FolderIterator {

	}
	static getRootFolder(): Folder {

	}
	static getStorageLimit(): Integer {

	}
	static getStorageUsed(): Integer {

	}
	static getTrashedFiles(): FileIterator {

	}
	static getTrashedFolders(): FolderIterator {

	}
	static removeFile(child: File): Folder {

	}
	static removeFolder(child: Folder): Folder {

	}
	static searchFiles(params: String): FileIterator {

	}
	static searchFolders(params: String): FolderIterator {

	}
}

export default DriveApp;
