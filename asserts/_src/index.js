import 'babel-polyfill';
import 'whatwg-fetch';

import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import BooklistApp from './components/bl_app.js';
import gReducers from './reduxers';

let booklistStore = createStore(gReducers, window.STATE_FROM_SERVER);
const Utensil = document.querySelector('.container');

ReactDOM.render(
	<Provider store={booklistStore}>
		<BooklistApp />
	</Provider>, Utensil
);