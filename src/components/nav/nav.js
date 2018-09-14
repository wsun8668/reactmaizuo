import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; 
import './nav.css';

class NavUI extends Component {
	render() {
		return (
			<Fragment>
				<ReactCSSTransitionGroup transitionName="slide" transitionEnterTimeout={0} transitionLeaveTimeout={0}>
					{this.props.isNavShow && 
						<div id="mz_menu">
							<ul>
								<li>首页<i className="iconfont icon-moreunfold"></i></li>
								<li>影片<i className="iconfont icon-moreunfold"></i></li>
								<li>影院<i className="iconfont icon-moreunfold"></i></li>
								<li>商城<i className="iconfont icon-moreunfold"></i></li>
								<li>我的<i className="iconfont icon-moreunfold"></i></li>
								<li>卖座卡<i className="iconfont icon-moreunfold"></i></li>
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
	return {};
}

var Nav = connect(mapStateToProps, mapDispatchToProps)(NavUI);
export default Nav;