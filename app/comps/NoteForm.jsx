import React from 'react';
import {connect} from 'react-redux';
import {addItem, toggle} from 'action';

class NoteForm extends React.Component{	
	handleSubmit(e){
		e.preventDefault();		
		var {dispatch} = this.props;
		dispatch(addItem(this.refs.txt.value));	
		dispatch(toggle());
	}

	toggle(){
		var {dispatch} = this.props;  	// var dispatch = this.props.dispatch;   // dispatch function can revoke anywhere
		dispatch(toggle());
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
