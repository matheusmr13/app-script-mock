import test from './../baseTest';

test('DriveApp', (assert) => {
	it('should return file with specified id', () => {
		const file = DriveApp.getFileById('myFileId');
		assert.equal('myFileId', file.getId());
	});
	it('should return folder with specified id', () => {
		const folder = DriveApp.getFolderById('myFolderId');
		assert.equal('myFolderId', folder.getId());
	});
	it('should return file and folder should have one file', () => {
		const folder = DriveApp.getFolderById('myFolderId');
		const file = DriveApp.getFileById('myFileId');
		const newFile = file.makeCopy('my new file name', folder);
		assert.equal('my new file name', newFile.getName());
		assert.equal(1, folder.getFiles().length);
	});
});
