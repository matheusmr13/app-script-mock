var appScript = require('build/app-script-mock.js')
console.info(appScript)

describe('test',function() {
	it('teste',function() {
		assert(-1, [1,3,4].indexOf(2));
	})
});