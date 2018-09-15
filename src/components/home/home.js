import React, { Component, Fragment } from 'react';
import Movie from '../movie/movie.js';
import Banner from '../banner/banner.js';

class Home extends Component {
	render() {
		return (
			<Fragment>
				<Banner></Banner>
				<Movie></Movie>
			</Fragment>
		);
	}
} 

export default Home;