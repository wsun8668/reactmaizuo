import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; 
import './nav.css';
import {NavLink} from 'react-router-dom';

class NavUI extends Component {
	render() {
		return (
			<Fragment>
				<ReactCSSTransitionGroup transitionName="slide" transitionEnterTimeout={0} transitionLeaveTimeout={0}>
					{this.props.isNavShow && 
						<div id="mz_menu">
							<ul onClick={this.props.handleNavShow}>
								<li><NavLink to="/home">首页<i className="iconfont icon-moreunfold"></i></NavLink></li>
								<li><NavLink to="/film">影片<i className="iconfont icon-moreunfold"></i></NavLink></li>
								<li><NavLink to="/home">影院<i className="iconfont icon-moreunfold"></i></NavLink></li>
								<li><NavLink to="/home">商城<i className="iconfont icon-moreunfold"></i></NavLink></li>
								<li><NavLink to="/home">我的<i className="iconfont icon-moreunfold"></i></NavLink></li>
								<li><NavLink to="/home">卖座卡<i className="iconfont icon-moreunfold"></i></NavLink></li>
							</ul>
						</div>
					}
				</ReactCSSTransitionGroup>
			</Fragment>
		);
	}
}

function mapStateToProps(state) {
	return {
		isNavShow: state.isShow
	};
}

function mapDispatchToProps(dispatch) {
	return {
		handleNavShow() {
			dispatch({type: 'CHANGE_NAVSHOW', payload: false})
		}
	};
}

var Nav = connect(mapStateToProps, mapDispatchToProps)(NavUI);
export default Nav;