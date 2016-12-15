import 'babel-polyfill';
import 'whatwg-fetch';

import $ from 'jquery';
import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';

import ConfigStore from './store-config.js';

import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import rPrimise from 'redux-promise';

import routes from './routes';

const store = ConfigStore();

const Utensil = document.querySelector('.container');

ReactDOM.render(
	<Provider store={ store }>
		<Router history={ browserHistory } routes={ routes } />
	</Provider>, Utensil
);