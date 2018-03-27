// @flow
import File from './File';
import Folder from './Folder';
import BlobSource from './BlobSource';
import FileIterator from './FileIterator';
import FolderIterator from './FolderIterator';

class DriveApp {
	static _folders_: { [string]: Folder } = {};
	static _files_: { [string]: File } = {};
	static _removedFolders_: Array<Folder> = [];
	static _removedFiles_: Array<File> = [];
	static _root_: Folder = new Folder('root');

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
		return DriveApp._files_[id];
	}

	static getFolderById(id) {
		return DriveApp._folders_[id];
	}

	static addFile(child: File): Folder {
		DriveApp._root_.addFile(child);
		DriveApp._files_[child.getId()] = child;
		return DriveApp._root_;
	}

	static addFolder(child: Folder): Folder {
		DriveApp._root_.addFolder(child);
		DriveApp._folders_[child.getId()] = child;
		return DriveApp._root_;
	}

	static createFolder(name: String): Folder {
		return new Folder(name);
	}

	static getFiles(): FileIterator {
		return new FileIterator(Object.values(DriveApp._files_));
	}

	static getFilesByName(name: String): FileIterator {
		return new FileIterator(
			Object
				.keys(DriveApp._files_)
				.map(key => DriveApp._files_[key])
				.filter(file => file.getName() === name)
			);
	}

	static getFilesByType(mimeType: String): FileIterator {
		return new FileIterator(
			Object
				.keys(DriveApp._files_)
				.map(key => DriveApp._files_[key])
				.filter(file => file.getMimeType() === mimeType)
			);
	}

	static getFolders(): FolderIterator {
		return new FolderIterator(Object.values(DriveApp._folders_));
	}

	static getFoldersByName(name: String): FolderIterator {
		return new FolderIterator(
			Object
				.keys(DriveApp._folders_)
				.map(key => DriveApp._folders_[key])
				.filter(folder => folder.getName() === name)
			);
	}

	static getRootFolder(): Folder {
		return DriveApp._root_;
	}

	static getStorageLimit(): number {
		return 0;
	}
	static getStorageUsed(): number {
		return 0;
	}
	static getTrashedFiles(): FileIterator {
		return new FileIterator(DriveApp._removedFiles_);
	}
	static getTrashedFolders(): FolderIterator {
		return new FolderIterator(DriveApp._removedFolders_);
	}
	static removeFile(child: File): Folder {
		const file = DriveApp._files_[child.getId()];
		DriveApp._removedFiles_.push(file);
		if (file) {
			file.getFolder().removeFile(file);
			delete DriveApp._files_[child.getId()];
			return file.getFolder();
		}
		return DriveApp._root_;
	}
	static removeFolder(child: Folder): Folder {
		const folder = DriveApp._folders_[child.getId()];
		if (folder) {
			DriveApp._removedFolders_.push(folder);
			delete DriveApp._folders_[child.getId()];
		}
		return DriveApp._root_;
	}

	// implement
	/*eslint-disable */
	static searchFiles(params: String): FileIterator {}
	static searchFolders(params: String): FolderIterator {}
	static continueFileIterator(continuationToken: String): FileIterator {}
	static continueFolderIterator(continuationToken: String): FolderIterator {}

	static createFile(nameOrBlob: String | BlobSource, content: ?String, mimeType: ?String): File {
		if (typeof nameOrBlob === 'string') {
			return new File(nameOrBlob);
		}
		return new File(nameOrBlob);
	}
	/*eslint-enable */
}

export default DriveApp;
