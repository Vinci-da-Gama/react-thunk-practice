import React from 'react';
const { Component } = React;
import { connect } from 'react-redux';

class SelectedBook extends Component {
    constructor(props) {
        super(props);
    }

    render() {
    	if (!this.props.choosenBook) {
	      	return (
	      		<div className="col-xs-12 col-sm-9">
	      			Select a book to get started.
	      			<div className="cssLoader">
	      				<div className="dot1"></div>
						<div className="dot2"></div>
	      			</div>
	      		</div>
	      	);
	    }

        return (
            <div className="col-xs-12 col-sm-9">
            	<div className="page-header margin-top0">
            	  	<h2 className="margin-top0">Book Details: </h2>
            	</div>
            	<ul className="list-group">
					<li className="list-group-item text-center">{ this.props.choosenBook.title }</li>
					<li className="list-group-item">{ this.props.choosenBook.page }</li>
					<li className="list-group-item">{ this.props.choosenBook.author }</li>
				</ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
	console.log('27 -- state is: ', state);
	return(
		{choosenBook: state.theActiveBook}
	);
}

export default connect(mapStateToProps, null)(SelectedBook);