var React = require('react');
import Note from './Note.jsx';
import NoteForm from './NoteForm.jsx';
import {connect} from 'react-redux';	// connect is a function and return a function

class List extends React.Component{
	constructor(props){
		super(props);
		
		this.del = this.del.bind(this);
		this.add = this.add.bind(this);
	}
	
	del(index){
		this.state.arr.splice(index,1);
		this.setState(this.state);
	}
	
	add(txt){
		this.state.arr.push(txt);
		this.setState(this.state);
	}

	render(){
		return(			
			<div>
				<NoteForm handleAdd={this.add} />
			{
				this.props.arr.map((item, ind)=>{		// because arr becomes a props on the connect function
					return <Note key={ind} ind={ind} rmv={this.del} >{item}</Note>
				})
				
			}
			</div>
		)
	}
}

module.exports = connect(function(state){
	return {arr: state.arr}					// arr comes from the store of the redux_demo.jsx file; arr becomes a props
})(List);