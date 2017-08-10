import React,{Component} from "react";
import "./Register.css";
import $ from "jquery";
class Register extends Component{
	constructor(){
		super();
		this.state={
			num:1,
			type1:"text",
			type2:"password",
			phd1:"手机号",
			phd2:"请证明你不是机器人",
			phd3:"短信验证码",
			phd4:"设置6-16位密码",
			bool:1,
		};
		this.changeClick=this.changeClick.bind(this);
		this.changeCode=this.changeCode.bind(this);
		this.handleClick=this.handleClick.bind(this);
	}
	render(){
			
			let src="https://passport.lagou.com/vcode/create?from=register&refresh="+this.state.num
			console.log(src)
		return(
			<div>
				<div className="form">
					<div className="wrap">				
						<div className="phone">
							<input className="phone-input" type={this.state.type1} placeholder={this.state.phd1} />
							<span className="phone-infor">请填写手机号</span>
						</div>
						<div className="roobit">
							<input className="roobit-input" type={this.state.type1} placeholder={this.state.phd2} />
							<span className="roobit-infor">请输入验证码</span>
						</div>
						<div className="codebox">
							<div className="code">
								<img src={src} alt=""/>
							</div>
							<a>看不清楚，<em onClick={this.changeCode}>换一张</em></a>
						</div>
						<div className="inform-code">
							<input className="code-input" type={this.state.type1} placeholder={this.state.phd3} />
							<span className="code-infor">请输入验证码</span>
							<div className="get">获取</div>
						</div>
						<div className="password">
							<input className="psw-input" type={this.state.type2} placeholder={this.state.phd4} />
							<i className={this.state.bool?"iconfont icon-biyan":"iconfont icon-yanjing"} onClick={this.changeClick}></i>
							<span className="password-infor">6-16位密码</span>
						</div>
						<a><div className="register" onClick={this.handleClick}>注册</div></a>
						<span className="no">已有账号?</span>
						<a href="http://localhost:3000/#/Login"><div className="login">登录</div></a>
						<span className="bottom-text">点击注册,即代表你同意<em><a href="https://www.lagou.com/privacy.html">《拉勾用户协议》</a></em></span>
					</div>
				</div>
			</div>
		)
	}
	changeClick(){
		this.state.type2==="password"?
		this.setState({
			bool:0,
			type2:"text",
		}):this.setState({
			bool:1,
			type2:"password",
		})
	}
	changeCode(){
		var p=$("img").html()
		console.log(p)
		var num=this.state.num+1
		this.setState({
			num:num
		})
	}
	handleClick(){
		var phone=$(".phone-input").val();
		var roobit=$(".roobit-input").val();
		var code=$(".code-input").val();
		var psw=$(".psw-input").val();
		if(phone===""){
			document.querySelector(".phone-infor").style.display="inline-block";
		}
		if(roobit===""){
			document.querySelector(".roobit-infor").style.display="inline-block";
		}
		if(code===""){
			document.querySelector(".code-infor").style.display="inline-block";
		}
		if(psw===""){
			document.querySelector(".password-infor").style.display="inline-block";
		}
	}
	componentDidMount() {   
        $(".phone-input").focus(function () {
			$('.phone-infor').hide();
			
		});
		$(".roobit-input").focus(function () {
			$('.roobit-infor').hide();
			
		});
		$(".code-input").focus(function () {
			$('.code-infor').hide();
			
		});
		$(".psw-input").focus(function () {
			$('.password-infor').hide();
			
		});
		
		
    }
}
export default Register;