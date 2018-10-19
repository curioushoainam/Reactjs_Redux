var React = require('react');

export default class NoteForm extends React.Component{
	constructor(props){
		super(props);
		this.add = this.add.bind(this);
	}
	add(){
		var txt = this.refs.txt.value;
		this.refs.txt.value= '';
		this.props.plus(txt);
	}
	render(){
		return(
			<div>
				<input type="text" ref="txt" placeholder="Enter your note!" />
				<button onClick={this.add} >Add</button>
			</div>
		);
	}
}
