import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import Login from "./components/Login";
import BubblePage from "./components/BubblePage";
import PrivateRoute from "./components/PrivateRoute";
import "./styles.scss";

function App(props) {
	const logout = (e) => {
		e.preventDefault();
		localStorage.removeItem("token");
		window.location.reload(false);
	};
	return (
		<Router>
			<div className='App'>
				<div className='nav'>
					<Link to='/login' className='link'>
						Login
					</Link>

					<Link to='/bubbles' className='link'>
						Bubbles Page
					</Link>

					<button onClick={logout} className='link'>
						Log Out
					</button>
				</div>
				<div>
					<Switch>
						<PrivateRoute path='/bubbles' component={BubblePage} />

						<Route path='/login' component={Login} />
						<Route exact path='/' component={Login} />
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
