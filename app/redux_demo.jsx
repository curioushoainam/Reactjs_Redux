var redux = require('redux');

var arrReducer = (state = ['PHP','NODEJS','REACTJS'], action) => {
	switch(action.type){
		case 'ADD_ITEM':
			return [...state, action.item]

		case 'REMOVE_ITEM':
			return state.filter((e,i)=>i != action.index)

		default:
			return state;
	}
};

var isAddingReducer = (state = false, action)=>{
	switch(action.type){
		case 'TOGGLE_IS_ADDING':
			return !state

		default:
			return state;
	} 	
};

var reducer = redux.combineReducers({
	arr: arrReducer,
	isAdding: isAddingReducer
});

// var store = redux.createStore(reducer);
var store = redux.createStore(reducer, redux.compose(
	window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : noop => noop
));

console.log('init : ',store.getState());

// monitor the change of state
store.subscribe(()=>console.log(store.getState()));

store.subscribe(()=>{
	var str = store.getState();
	document.getElementById('p-detail').innerHTML = JSON.stringify(str);	// convert str into json type
});

// implement the action in reducer
// store.dispatch({type: 'TOGGLE_IS_ADDING'});

// store.dispatch({
// 	type: 'ADD_ITEM',
// 	item: 'LARAVEL'
// });

// store.dispatch({
// 	type: 'REMOVE_ITEM',
// 	index: 0
// });

module.exports = store;