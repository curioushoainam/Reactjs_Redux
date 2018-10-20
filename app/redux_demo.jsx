var redux = require('redux');

var defaultState = {
	arr: ['PHP','NODEJS','REACTJS'],
	isAdding: false
};

var reducer = (state = defaultState, action) => {
	switch(action.type){
		case 'TOGGLE_IS_ADDING':
			return {...state, isAdding: !state.isAdding}			

		case 'ADD_ITEM':
			return {...state, arr: [...state.arr, action.item]}

		case 'REMOVE_ITEM':
			return {...state, arr: state.arr.filter((e,i)=>i != action.index)}

		default:
			return state;
	} 	
}

var store = redux.createStore(reducer);
console.log('init : ',store.getState());

// monitor the change of state
store.subscribe(()=>console.log(store.getState()));

// implement the action in reducer
store.dispatch({type: 'TOGGLE_IS_ADDING'});

store.dispatch({
	type: 'ADD_ITEM',
	item: 'LARAVEL'
});

store.dispatch({
	type: 'REMOVE_ITEM',
	index: 0
});
