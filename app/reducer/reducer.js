var redux = require('redux');
import arrReducer from './arrReducer.js';
import isAddingReducer from './isAddingReducer.js';

var reducer = redux.combineReducers({
	arr: arrReducer,
	isAdding: isAddingReducer
});

// import arrReducer as arr from './arrReducer';
// import isAddingReducer as isAdding from './isAddingReducer';
// var reducer = redux.combineReducers({ arr, isAdding });

module.exports = reducer;
