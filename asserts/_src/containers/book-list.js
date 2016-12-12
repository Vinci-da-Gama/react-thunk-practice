import React from 'react';
const { Component } = React;
import { connect } from 'react-redux';
import { actionSelectedBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class Booklist extends Component {
    constructor(props) {
        super(props);
    }

    renderEachBook() {
    	return this.props.propBooks.map((eachbook) => {
    		return (
    			<li key={eachbook.title} className="list-group-item book-inli"
                    onClick={ () => {this.props.actionSelectedBook(eachbook)} }>
    			    {eachbook.title}
    			</li>
            );
    	});
    }

    render() {
        return (
            <ul className="list-group col-xs-12 col-sm-3">
                {this.renderEachBook()}
            </ul>
        );
    }
}

const mapStateToProps = (state) => {
    return (
        {propBooks: state.booksCollection}
    );
};

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({actionSelectedBook: actionSelectedBook}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Booklist);