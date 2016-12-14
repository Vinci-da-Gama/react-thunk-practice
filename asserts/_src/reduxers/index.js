import { combineReducers } from 'redux';
import BooklistReducer from './reducer_books';
import ReceivedUsers from './reducer_users.js';

const RootReducer = combineReducers({
	booksCollection: BooklistReducer,
	users: ReceivedUsers
});

export default RootReducer;