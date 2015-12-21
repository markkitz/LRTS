module.exports = {
	entry: './index.jsx',
	output: {
		path: __dirname,
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'babel',
			query: {
				presets: [ 'react', "stage-2", 'es2015']
			}
			}
		]
	}
}