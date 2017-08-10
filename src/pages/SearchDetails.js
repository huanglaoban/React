import React,{Component} from "react";
import "./SearchDetails.css";

class SearchDetails extends Component{
	render(){
		return(
			<div>
				<div className="datails">
					<div className="data-header">
						<a href="http://localhost:3000/index.html#/Search"><span className="left" /></a>
						职位详情
						<span className="right" />
					</div>
					<div className="data-content">
						<div className="position-title">
							<h3>sdasd</h3>
							<div className="icon">
								<span className="star"></span>
								<span className="collect">未收藏</span>
							</div>
						</div>
						<div className="position-detail">
							<ul className="position-item">
								<li><span className="money"/>6K-12K</li>
								<li className="li2"><span className="city" />6K-12K</li>
								<li className="li3"><span className="time"/>全职</li>
								<li><span className="year"/>6K-12K</li>
								<li className="li2"><span className="education"/>6K-12K</li>
							</ul>
							<p>职位诱惑：五险一金,包吃工作餐,员工活动,员工旅游</p>
						</div>
						<div className="position-company">
							<img src="" alt=""/>
						</div>
					</div>
					<div className="data-footer">
						投个简历
					</div>
				</div>
			</div>
		)
	}
	
}
export default SearchDetails;