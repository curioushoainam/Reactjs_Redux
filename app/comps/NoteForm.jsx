import React from 'react';
import {connect} from 'react-redux';

class NoteForm extends React.Component{	
	handleSubmit(e){
		e.preventDefault();		
		var {dispatch} = this.props;
		dispatch({type: 'ADD_ITEM', item: this.refs.txt.value});		
		dispatch({type: 'TOGGLE_IS_ADDING'});
	}

	toggle(){
		var {dispatch} = this.props;  	// var dispatch = this.props.dispatch;   // dispatch function can revoke anywhere
		dispatch({type: 'TOGGLE_IS_ADDING'});
	}

	render(){
		if(this.props.isAdding) 
			return(
				<form onSubmit={this.handleSubmit.bind(this)}>
					<input type="text" ref="txt" placeholder="Enter your note!" />
					<button onClick={this.add} >Add</button>
				</form>
			);

		return(
			<button onClick={this.toggle.bind(this)} >+</button>
		)

	}
}

module.exports = connect(function(state){
	return {isAdding: state.isAdding}		// can return multiple states
})(NoteForm);
