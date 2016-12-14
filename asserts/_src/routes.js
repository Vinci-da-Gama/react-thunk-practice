import React from 'react';
import { Route, IndexRoute } from 'react-router';

import IdxApp from './components/idxApp';
import Idx from './containers/idx.js';
import Else from './containers/else';
import NoFound from './components/404nofound';

export default (
	<Route path="/" component={IdxApp}>
		<IndexRoute component={Idx} />
		<Route path="else" component={Else} />
		<Route path="*" component={NoFound} />
	</Route>
);