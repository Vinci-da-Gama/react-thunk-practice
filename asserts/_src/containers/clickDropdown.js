import React from 'react';
const { Component } = React;
import { connect } from 'react-redux';
import Sublist0 from '../components/sublist0.js';

class DropdownList extends Component {
    constructor(props) {
        super(props);
    }

    renderList() {
    	return this.props.list0.map((l0elem) => {
    		return (
    			<li key={l0elem.title} className="before-unicode-style">
    				&nbsp;{l0elem.title}
    			</li>
 			);
    	});
    }

    render() {
        return (
        	<div className="col-xs-12 col-sm-4">
        		<ul className="list-unstyled">
					{this.renderList()}
					<Sublist0 sublist0 = {this.props.list1} sublist1 = {this.props.list2} />
				</ul>
        	</div>
        );
    }
}

const mapStateToProps = (state) => {
	console.log('19 -- state.dpList is: ', state.dpList);
	return (
		{
			list0: state.dpList[0],
			list1: state.dpList[1],
			list2: state.dpList[2]
		}
	);
}

export default connect(mapStateToProps, null)(DropdownList);