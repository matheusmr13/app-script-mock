import File from './DriveApp/File';
import Folder from './DriveApp/Folder';

class DriveApp {
	static Access = {
		ANYONE: 'ANYONE',
		ANYONE_WITH_LINK: 'ANYONE_WITH_LINK',
		DOMAIN: 'DOMAIN',
		DOMAIN_WITH_LINK: 'DOMAIN_WITH_LINK',
		PRIVATE: 'PRIVATE'
	}

	static Permission = {
		COMMENT: 'COMMENT',
		EDIT: 'EDIT',
		NONE: 'NONE',
		OWNER: 'OWNER',
		VIEW: 'VIEW'
	}

	static getFileById (id) {
		return new File(id);
	}

	static getFolderById (id) {
		return new Folder(id);
	}
}

export default DriveApp;
