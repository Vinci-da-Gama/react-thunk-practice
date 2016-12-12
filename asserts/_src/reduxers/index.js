import { combineReducers } from 'redux';
import BooklistReducer from './reducer_books';
import ActiveBookReducer from './reducer_active_book';
import Dropdownlist from './reducer_clickdropdown';

const RootReducer = combineReducers({
	booksCollection: BooklistReducer,
	theActiveBook: ActiveBookReducer,
	dpList: Dropdownlist
});

export default RootReducer;