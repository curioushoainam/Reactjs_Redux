var React = require('react');
import {connect} from 'react-redux';
import {removeItem} from 'action';

class Note extends React.Component{		
	del(){		
		var {ind, dispatch} = this.props;
		dispatch(removeItem(ind));
	}
	render(){
		return(
			<div>
				<p>{this.props.children}</p>
				<button onClick={this.del.bind(this)}>Delete</button>
			</div>
		)		
	}
}

module.exports = connect()(Note);	// connect() because this component has no state
