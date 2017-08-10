import React,{Component} from 'react';
import "./Login.css";
import $ from "jquery";
class Login extends Component{
	constructor(){
		super();
		this.state={
			bool:1,
			type1:"text",
			type2:"password",
		}
		this.handleClick=this.handleClick.bind(this);
		this.changeClick=this.changeClick.bind(this);
	}
	render(){
		return(
			<div>
				<div className="form">
					<div className="username">
					<input className="iphone" type={this.state.type1} placeholder="已验证手机/邮箱" />
					<span className="user-infor">请输入常用账号</span>
					</div>
					<div className="password">
					<input className="psw" type={this.state.type2} placeholder="密码" />
					<i className={this.state.bool?"iconfont icon-biyan":"iconfont icon-yanjing"} onClick={this.changeClick}></i>
					<span className="psw-infor">请输入密码</span>
					</div>
					<a onClick={this.handleClick}><div className="login">登录</div></a>
					<span className="no">还没有账号?</span>
					<a href="http://localhost:3000/#/Register"><div className="register">注册</div></a>
				</div>
			</div>
		)
	}
	handleClick(){
		var iphone=document.querySelector(".iphone").value;
		var psw=document.querySelector(".psw").value;
		if(iphone===""){
			document.querySelector(".user-infor").style.display="inline-block";
		}
		if(psw===""){
			document.querySelector(".psw-infor").style.display="inline-block";
		}
		if(iphone!==""&&psw!==""){
			window.location.href="http://localhost:3000/index.html";
		}
		
		var data={};
		data.username=iphone;
		data.psw=psw;
		if("localStorage" in window){
			localStorage.setItem("commentList",JSON.stringify(data))
		}
		
		
	}
	changeClick(){
		this.state.type2==="password"?
		this.setState({
			bool:0,
			type2:"text"
		}):this.setState({
			bool:1,
			type2:"password"
		})
	}
	componentDidMount() {   
        $(".iphone").focus(function () {
			$('.user-infor').hide();
			
		});
		 $(".psw").focus(function () {
			$('.psw-infor').hide();
		});
    }

	
}



export default Login;