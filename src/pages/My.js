import React,{Component} from "react";
import "./My.css";
import $ from "jquery";
class My extends Component{
	constructor(){
		super();
		this.state={
			username:""
		};
		this.handleClick=this.handleClick.bind(this);
	}
	render(){
		return(
			<div>
				<a href="http://localhost:3000/#/Login" className="_loginbox"><div className="_login">登录/注册</div></a>
				<div className="logininfo">
					<a href="" target="_self" className="resume">简历></a>
					<div className="headicon"></div>
					<p className="user">{this.state.username}</p>
				</div>
				<ul className="box">
					<li>投递</li>
					<li>面试</li>
					<li>邀约</li>
					<li>收藏</li>
				</ul>
				<div className="loginout" onClick={this.handleClick}>退出登录</div>
			</div>
		)
	}
	componentDidMount(){
		if(typeof(localStorage.commentList)!=="undefined"){
			$(".logininfo").show();
			$("._login").hide();
			$(".loginout").show();
		
		var obj=localStorage.getItem("commentList");
		obj=JSON.parse(obj);
		
		this.setState({
			username:obj.username
		})
		
		}
	}
	
	handleClick(){
		localStorage.removeItem("commentList");
		
			$(".logininfo").hide();
			$("._login").show();
			$(".loginout").hide();
			
	}
}
export default My;