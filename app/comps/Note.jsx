var React = require('react');

export default class Note extends React.Component{	
	constructor(props){
		super(props);
		this.del = this.del.bind(this);
	}
	del(){
		// this.props.rmv(this.props.ind);
		var {ind, rmv} = this.props;
		rmv(ind);
	}
	render(){
		return(
			<div>
				<p>{this.props.children}</p>
				<button onClick={this.del}>Delete</button>
			</div>
		)		
	}
}
