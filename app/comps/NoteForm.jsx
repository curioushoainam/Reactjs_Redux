import React from 'react';

export default class NoteForm extends React.Component{
	constructor(props){
		super(props);	
		this.state = { isAdding: false }	
	}
	handleSubmit(e){
		e.preventDefault();		
		this.props.handleAdd(this.refs.txt.value);
		this.refs.txt.value = '';
		this.toggle();
	}

	toggle(){
		this.state.isAdding = !this.state.isAdding;
		this.setState(this.state);
	}

	render(){
		if(this.state.isAdding) 
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
