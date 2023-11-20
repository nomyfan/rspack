/**
 * @type {import('@rspack/core').RspackOptions}
 */
module.exports = {
	context: __dirname,
	entry: {
		main: "./index.js"
	},
	// module: {
	// 	rules: [
	// 		// {
	// 		// 	test: /\.js$/,
	// 		// 	use: [
	// 		// 		{
	// 		// 			loader: "./my-loader.js"
	// 		// 		}
	// 		// 	]
	// 		// }
	// 	]
	// },
	optimization: {
		minimize: false
	}
};
