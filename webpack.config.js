module.exports = {
	entry: './app/app.jsx',					// source
	output: {
		path: __dirname,
		filename: './public/bundle.js'		// destination
	},

	resolve: {	
		modules: [__dirname, 'node_modules'],	
		alias: {
			reducer: 'app/reducer/reducer.js',
			store: 'app/storeConfig.jsx',
			action: 'app/action.js',
			List: 'app/comps/List.jsx',
			Note: 'app/comps/Note.jsx',
			NoteForm: 'app/comps/NoteForm.jsx'
		}
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