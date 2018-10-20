var redux = require('redux');
import reducer from './reducer/reducer.js';

// var store = redux.createStore(reducer);
var store = redux.createStore(reducer, redux.compose(
	window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : noop => noop
));

// monitor the change of state
// store.subscribe(()=>console.log(store.getState()))

module.exports = store;
