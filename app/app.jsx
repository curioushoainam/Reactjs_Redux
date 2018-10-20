var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');	// var Provider = require('react-redux').Provider;
import List from 'List';

import store from 'store';

ReactDOM.render(
	<Provider store={store}>
		<List />
	</Provider>
	,document.getElementById('root')
);

