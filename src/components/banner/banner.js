import React, {Component} from 'react';
import './banner.css';
import axios from 'axios';

class Banner extends Component {
	constructor() {
		super();
		this.state = {
			bannerList: []
		}
	}
	render() {
		return (
			<div ref="mz_banner" id="mz_banner" className="swiper-container">
				<ul className="swiper-wrapper">
					{
						this.state.bannerList.map((item)=>{
							return (
								<li className="swiper-slide" key={item.id}>
									<img src={item.imageUrl} alt=""/>
								</li>
							)
						})
					}
					{/*<li className="swiper-slide"><img src="/images/1.jpg" alt="" /></li>
					<li className="swiper-slide"><img src="/images/2.jpg" alt="" /></li>
					<li className="swiper-slide"><img src="/images/3.jpg" alt="" /></li>*/}
				</ul>
			</div>
		);
	}
	componentDidMount() {
		axios.get('/v4/api/billboard/home').then((res)=>{
			console.log(res);
			if(res.data.msg === 'ok') {
				this.setState({
					bannerList : res.data.data.billboards
				})

				new window.Swiper(this.refs.mz_banner,{
					loop : true
				});
			} 
		})
	}
}
export default Banner;