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

	addFile(child: File): Folder {
		console.info(child);
	}
	// addFolder(Folder child) : Folder
	// continueFileIterator(String continuationToken) : FileIterator
	// continueFolderIterator(String continuationToken) : FolderIterator
	// createFile(BlobSource blob) : File
	// createFile(String name, String content) : File
	// createFile(String name, String content, String mimeType) : File
	// createFolder(String name) : Folder
	// getFileById(String id) : File
	// getFiles() : FileIterator
	// getFilesByName(String name) : FileIterator
	// getFilesByType(String mimeType) : FileIterator
	// getFolderById(String id) : Folder
	// getFolders() : FolderIterator
	// getFoldersByName(String name) : FolderIterator
	// getRootFolder() : Folder
	// getStorageLimit() : Integer
	// getStorageUsed() : Integer
	// getTrashedFiles() : FileIterator
	// getTrashedFolders() : FolderIterator
	// removeFile(File child) : Folder
	// removeFolder(Folder child) : Folder
	// searchFiles(String params) : FileIterator
	// searchFolders(String params) : FolderIterator
}

export default DriveApp;
