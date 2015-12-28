module.exports = {
	entry: './src/index.jsx',
	output: {
		path: __dirname,
		filename: 'bundle.js'
	},
    devtool: 'inline-source-map',
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