import React, { Component, Fragment } from 'react';
import Header from './components/header/header.js';
import Nav from './components/nav/nav.js';
import Banner from './components/banner/banner.js';

class App extends Component {
  render() {
    return (
      <Fragment>
      	<Header></Header>
      	<Nav></Nav>
      	<Banner></Banner>
      </Fragment>
    );
  }
}

export default App;
