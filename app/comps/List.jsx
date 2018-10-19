var React = require('react');
import Note from './Note.jsx';
import NoteForm from './NoteForm.jsx';

class List extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			arr: ["Nodejs","React","HTML","JS"]
		}
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
				this.state.arr.map((item, ind)=>{
					return <Note key={ind} ind={ind} rmv={this.del} >{item}</Note>
				})
				
			}
			</div>
		)
	}
}

module.exports = List;