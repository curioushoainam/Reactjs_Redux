var redux = require('redux');

var defaultState = {
	arr: ['PHP','NODEJS','REACTJS'],
	isAdding: false
};

var reducer = (state = defaultState, action) => {
	switch(action.type){
		case 'TOGGLE_IS_ADDING':
			return {...state, isAdding: !state.isAdding}
			break;
		default:
			return state;
	} 	
}

var store = redux.createStore(reducer);
console.log(store.getState());

// implement the action in reducer
store.dispatch({type: 'TOGGLE_IS_ADDING'});
console.log(store.getState());