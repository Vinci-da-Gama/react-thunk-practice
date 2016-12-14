import 'babel-polyfill';
import 'whatwg-fetch';

import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';
import rPrimise from 'redux-promise';

import _ from 'lodash';

import gReducers from './reduxers';
import routes from './routes';

// let gStore = createStore(gReducers, applyMiddleware(thunk));
const createStoreWithMiddleware = applyMiddleware(rPrimise)(createStore);

const Utensil = document.querySelector('.container');

ReactDOM.render(
	<Provider store={ createStoreWithMiddleware(gReducers) }>
		<Router history={ browserHistory } routes={ routes } />
	</Provider>, Utensil
);