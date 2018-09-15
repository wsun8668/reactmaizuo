import React, { Component, Fragment } from 'react';
import Header from './components/header/header.js';
import Nav from './components/nav/nav.js';
import Home from './components/home/home.js';
import Film from './components/film/film.js';
import Detail from './components/detail/detail.js';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <Router>
           <Fragment>
              <Header></Header>
              <Nav></Nav>
              <Switch>
                <Route path="/home" component={Home}></Route>
                <Route path="/film" component={Film}></Route>
                <Route path="/detail" component={Detail}></Route>
                <Redirect from="/*" to="/home"></Redirect>
                </Switch>
           </Fragment>
        </Router>
    );
  }
}

export default App;
