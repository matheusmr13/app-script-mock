# app-script-mock
Mock Google App Script's objects. Make developing and testing GAS simple.


[![Coverage Status](https://travis-ci.org/matheusmr13/app-script-mock.svg?branch=master)](https://coveralls.io/github/matheusmr13/app-script-mock?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/matheusmr13/app-script-mock/badge.svg?branch=master)](https://coveralls.io/github/matheusmr13/app-script-mock?branch=master)
[![Coverage Status](https://codeclimate.com/github/matheusmr13/app-script-mock/badges/gpa.svg)](https://codeclimate.com/github/matheusmr13/app-script-mock)

## Install

```
npm install --save-dev app-script-mock
```
And before all your tests (you can use mocha's `before`)
```js
var extendGlobal = require('app-script-mock');
describe('[...]', () => {
	before(() => {
		extendGlobal(global);
	});
});
```

## Why?
This project emerged from another personal project that runs in **G**oogle **A**pp **S**cript ([QuickDrive](https://github.com/matheusmr13/QuickDrive)).
With the porpouse of getting your GAS project out of the cloud IDE that Google provides, app-script-mock offers a way to unit test your project.

## Example
You want to create a GAS that will read data from a Spreadsheet and then create a Form with questions based on data.
```js
const functionThatCreatesFormsBasedOnSpreadsheet = () => {
	//Your code here that uses FormApp/DriveApp/SpreadsheetApp
	return form.getId();
}
describe('Should create a form with 3 questions based on spreadsheet', () => {
	const createdFormId = functionThatCreatesFormsBasedOnSpreadsheet();
	assert.equal(3, FormApp.openById(createdFormId).getItems().length);
})
```

