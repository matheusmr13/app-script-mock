const glob = require('glob');

const libraryName = 'test';
const outputFile = `${libraryName}.js`;

const config = {
	entry: glob.sync(`${__dirname}/test/**/*.js`),
	devtool: 'source-map',
	output: {
		path: `${__dirname}/build`,
		filename: outputFile,
		library: libraryName,
		libraryTarget: 'umd',
		umdNamedDefine: true
	},
	module: {
		loaders: [
			{
				test: /(\.jsx|\.js)$/,
				loader: 'babel-loader',
				exclude: /(node_modules|bower_components)/
			}
		]
	}
};

module.exports = config;
