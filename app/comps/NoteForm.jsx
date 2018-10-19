import React from 'react';

export default class NoteForm extends React.Component{
	constructor(props){
		super(props);		
	}
	handleSubmit(e){
		e.preventDefault();		
		this.props.handleAdd(this.refs.txt.value);
		this.refs.txt.value = '';
	}
	render(){
		return(
			<form onSubmit={this.handleSubmit.bind(this)}>
				<input type="text" ref="txt" placeholder="Enter your note!" />
				<button onClick={this.add} >Add</button>
			</form>
		);
	}
}
