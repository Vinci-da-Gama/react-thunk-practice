import React from 'react';
const { Component } = React;
import Booklist from '../containers/book-list';
import SelectedBook from '../containers/book-detail';
import DropdownList from '../containers/clickDropdown';

class BooklistApp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row">
            	<Booklist />
                <SelectedBook />
                <DropdownList />
            </div>
        );
    }
}

export default BooklistApp;
