import React, {Component, Fragment} from 'react';
import './film.css';
import ComingSoon from '../comingsoon/comingSoon.js';
import Playing from '../playing/playing.js';
import {Route, NavLink, Switch, Redirect,} from 'react-router-dom';

class Film extends Component {
	render() {
		return (
			<div id="mz_film">
				<div className="tab">
					<NavLink to="/film/playing" >正在上映</NavLink>
					<NavLink to="/film/comingsoon">即将上映</NavLink>
				</div>
				<Switch>
					<Route path="/film/playing" component={Playing}></Route>
					<Route path="/film/comingsoon" component={ComingSoon}></Route>
					<Redirect from="/film" to="/film/playing"></Redirect>
				</Switch>
			</div>
		);
	}
}

export default Film;