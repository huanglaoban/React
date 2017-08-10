import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,hashHistory,IndexRoute} from "react-router";
import './index.css';
import App from './App';
import Login from "./pages/Login";
import My from "./pages/My";
import Position from "./pages/Position";
import Search from "./pages/Search";
import Register from "./pages/Register";
import SearchDetails from "./pages/SearchDetails";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
		<Router history={hashHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={Position} />
				<Route path="/Search" component={Search}></Route>
				<Route path="/My" component={My}></Route>
			</Route>
			<Route path="/Login" component={Login}></Route>
			<Route path="/Register" component={Register}></Route>
			<Route path="/SearchDetails" component={SearchDetails}></Route>
		</Router>
		
),
document.getElementById('root')
);
registerServiceWorker();
