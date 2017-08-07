const libraryName = 'test';
const outputFile = `${libraryName}.js`;

const config = {
	entry: `${__dirname}/test/test.js`,
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
