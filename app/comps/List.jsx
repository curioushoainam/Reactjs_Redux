var React = require('react');
import Note from 'Note';
import NoteForm from 'NoteForm';
import {connect} from 'react-redux';	// connect is a function and return a function

class List extends React.Component{	
	render(){
		return(			
			<div>
				<NoteForm />
			{
				this.props.arr.map((item, ind)=>{		// because arr becomes a props on the connect function
					return <Note key={ind} ind={ind} >{item}</Note>
				})
				
			}
			</div>
		)
	}
}

module.exports = connect(function(state){
	return {arr: state.arr}					// arr comes from the store of the redux_demo.jsx file; arr becomes a props
})(List);