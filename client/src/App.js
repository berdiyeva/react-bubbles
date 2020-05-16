import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Login from "./components/Login";
import BubblePage from "./components/BubblePage";
import PrivateRoute from "./components/PrivateRoute";
import "./styles.scss";

function App() {
	return (
		<Router>
			<div className='nav'>
				<Link to='/login' className='link'>
					Log In
				</Link>

				<Link to='/protected' className='link'>
					Bubble App Page
				</Link>
			</div>
			<div className='App'>
				<Switch>
					<PrivateRoute exact path='/protected' component={BubblePage} />
					<Route path='/login' component={Login} />
					<Route component={Login} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;

{
	/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */
}
