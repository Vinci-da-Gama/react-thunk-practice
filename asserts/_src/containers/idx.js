import React, { Component } from 'react';
import ReceiveBookList from './receive-bookslist';
import { Link } from 'react-router';
import DisplayThunkData from './display-thunk-data';

class Idx extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<div>
        		idx page...
                <Link className="btn btn-lg btn-primary" to="else">
                    Else
                </Link>
                <ReceiveBookList />
                <DisplayThunkData />
        	</div>
        );
    }
}

export default Idx;
