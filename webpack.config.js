module.exports = {
	entry: './app/app.jsx',					// source
	output: {
		path: __dirname,
		filename: './public/bundle.js'		// destination
	},
	mode: 'development',	
	module:{
		rules: [{
			test: /\.jsx?$/,
			exclude: /(node_modules)/,
			use: [{
				loader: 'babel-loader',
				options: {
					presets: ['env', 'react','es2015','stage-0']
				}
			}]	
		}]		
	}
};

// https://www.npmjs.com/package/babel-loader