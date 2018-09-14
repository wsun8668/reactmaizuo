import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import './header.css';

//UI组件
class HeaderUI extends Component {
	render() {
		return (
			<Fragment>
				<div id="mz_head">
					<div className="menu" onClick={()=>{this.props.isNavShow(this.props.isShow)}}><i className="iconfont icon-category"></i></div>
					<div className="title">卖座电影</div>
					<div className="city">哈尔滨 <i className="iconfont icon-moreunfold"></i></div>
					<div className="user"><i className="iconfont icon-account"></i></div>
				</div>
			</Fragment>
		);
	}
}

//容器组件
function mapStateToProps(state) {
	return {
		isShow: state.isShow
	};
}

function mapDispatchToProps(dispatch) {
	return {
		isNavShow(show) {
			dispatch({type: 'CHANGE_NAVSHOW', payload: !show})
		}
	};
}

var Header = connect(mapStateToProps, mapDispatchToProps)(HeaderUI);

export default Header;