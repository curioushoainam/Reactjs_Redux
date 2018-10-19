var React = require('react');
var ReactDOM = require('react-dom');

// class Note extends React.Component{	
// 	constructor(props){
// 		super(props);
// 		this.del = this.del.bind(this);
// 	}
// 	del(){
// 		this.props.rmv(this.props.ind);
// 	}
// 	render(){
// 		return(
// 			<div>
// 				<p>{this.props.children}</p>
// 				<button onClick={this.del}>Delete</button>
// 			</div>
// 		)		
// 	}
// }

// class List extends React.Component{
// 	constructor(props){
// 		super(props);
// 		this.state = {
// 			arr: ["Nodejs","React","HTML","JS"]
// 		}
// 		this.del = this.del.bind(this);
// 		this.addNote = this.addNote.bind(this);
// 	}
	
// 	del(index){
// 		this.state.arr.splice(index,1);
// 		this.setState(this.state);
// 	}
	
// 	addNote(txt){
// 		this.state.arr.push(txt);
// 		this.setState(this.state);
// 	}

// 	render(){
// 		return(			
// 			<div>
// 				<NoteForm plus={this.addNote} />
// 			{
// 				this.state.arr.map((item, ind)=>{
// 					return <Note key={ind} ind={ind} rmv={this.del} >{item}</Note>
// 				})
				
// 			}
// 			</div>
// 		)
// 	}
// }

// class NoteForm extends React.Component{
// 	constructor(props){
// 		super(props);
// 		this.add = this.add.bind(this);
// 	}
// 	add(){
// 		var txt = this.refs.txt.value;
// 		this.refs.txt.value= '';
// 		this.props.plus(txt);
// 	}
// 	render(){
// 		return(
// 			<div>
// 				<input type="text" ref="txt" placeholder="Enter your note!" />
// 				<button onClick={this.add} >Add</button>
// 			</div>
// 		);
// 	}
// }

import List from './comps/List.jsx';

ReactDOM.render(
	<List />
	,document.getElementById('root')
)