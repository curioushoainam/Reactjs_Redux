var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');	// var Provider = require('react-redux').Provider;
import List from './comps/List.jsx';

import store from './redux_demo.jsx';

ReactDOM.render(
	<Provider store={store}>
		<List />
	</Provider>
	,document.getElementById('root')
);

