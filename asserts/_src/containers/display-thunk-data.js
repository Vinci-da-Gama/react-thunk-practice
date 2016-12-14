import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GetUsersThunk } from '../actions/index';

class DisplayThunkData extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
    	console.log('11 -- componentWillMount');
        this.props.GetUsersThunk();
    }

	renderUsers() {
		console.log('16 -- this.props.propUsers is: ', this.props.propUsers);
		return this.props.propUsers.map((eachUser) => {
			return (
				<li className="list-group-item" key={eachUser.id}>
					<span className="pull-right text-primary">Email: {eachUser.email}</span>
					name: {eachUser.name} -- username: {eachUser.username}
				</li>
            );
		});	
	}

    render() {
		const pu = this.props.propUsers;
		console.log('29 -- pu is: ', pu);
		if (!pu || pu.length <= 0) {
			return (
				<div>
					Loading...
				</div>
			);
		}	
        return (
        	<div className="row">
        		display thunk Data -- users list.
        		<ul className="list-group">
        			{this.renderUsers()}
        		</ul>
        	</div>
        );
    }
}

const mapStateToProps = (state) => {
	console.log('48 -- state: ', state);
	return { propUsers: state.users };
}

export default connect(mapStateToProps, {GetUsersThunk})(DisplayThunkData);