import React,{Component} from "react";
import "./Search.css";
import "../iconfont.css";

import $ from "jquery";
import SearchList from "../components/SearchList";

class Search extends Component{
	constructor(){
		super();
		this.state={
			List:[],
			page:1
		};
		this.handleGoClick=this.handleGoClick.bind(this);
		this.handleBackClick=this.handleBackClick.bind(this);
		this.handleToClick=this.handleToClick.bind(this);
		this.getjobList=this.getjobList.bind(this);
		this.searchClick=this.searchClick.bind(this);
	}
	render(){
		return(
			<div>
				<div className="up">
					<div className="allcity" onClick={this.handleGoClick}>全国</div>
					<div className="search">
						<input className="search-input" type="text" placeholder="搜索职位或公司" />
						<span onClick={this.searchClick}><i className="iconfont icon-search"></i></span>
					</div>
					<SearchList List={this.state.List} onGetJobListMore={this.getjobList}/>
				</div>
				
				<div className="down" >
					<div className="header">拉勾网</div>
					<div className="head-left" onClick={this.handleBackClick}>&lt;</div>
					<div className="content">
						<span>热门城市</span>
						<ul className="hotcity" onClick={this.handleToClick}>
							<li>北京</li><li>上海</li><li>广州</li><li>深圳</li><li>成都</li><li>杭州</li>
						</ul>
						<span>ABCDEF</span>
						<ul className="hotcity" onClick={this.handleToClick}>
							<li>保定</li><li>北京</li><li>包头</li><li>长春</li><li>成都</li><li>重庆</li>
							<li>长沙</li><li>常州</li><li>沧州</li><li>东莞</li><li>大连</li><li>东营</li>
							<li>德阳</li><li>佛山</li><li>阜阳</li><li>福州</li><li></li><li></li>
						</ul>
						<span>ABCDEF</span>
						<ul className="hotcity" onClick={this.handleToClick}>
							<li>保定</li><li>北京</li><li>包头</li><li>长春</li><li>成都</li><li>重庆</li>
							<li>长沙</li><li>常州</li><li>沧州</li><li>东莞</li><li>大连</li><li>东营</li>
							<li>德阳</li><li>佛山</li><li>阜阳</li><li>福州</li><li></li><li></li>
						</ul>
						<span>ABCDEF</span>
						<ul className="hotcity" onClick={this.handleToClick}>
							<li>保定</li><li>北京</li><li>包头</li><li>长春</li><li>成都</li><li>重庆</li>
							<li>长沙</li><li>常州</li><li>沧州</li><li>东莞</li><li>大连</li><li>东营</li>
							<li>德阳</li><li>佛山</li><li>阜阳</li><li>福州</li><li></li><li></li>
						</ul>
					</div>
				</div>
			</div>
		)
	}
	handleGoClick(){
		document.querySelector(".down").style.display="block";
		document.querySelector(".up").style.display="none";
	}
	handleBackClick(){
		document.querySelector(".down").style.display="none";
		document.querySelector(".up").style.display="block";
	}
	handleToClick(e){
		e.target.style.background="#e7f3f0";
		document.querySelector(".down").style.display="none";
		document.querySelector(".up").style.display="block";
		document.querySelector(".allcity").innerHTML=e.target.textContent;
		this.setState({
				List:[]
			})
		var city=$(".allcity").html();
		var Name=$(".search-input").val();
		var _this=this;
		$.ajax({
			type:"get",
			url:"https://m.lagou.com/search.json?",
			data:"city="+city+"&positionName="+Name+"&pageNo=1&pageSize=15",
			dataType:"json",
			success:function(data){
				console.log(data)
				_this.setState({
					List:_this.state.List.concat(data.content.data.page.result)
				})
				console.log(_this.state.List)
			}
		});
		$(".positionlist").css("display","block");
	}
	getjobList(obj){
		
		 var list = [...this.state.List,...obj];
		
		this.setState({
          List:list
		})
	}
	
	searchClick(){
		this.setState({
				List:[]
			})
		var city=$(".allcity").html();
		var Name=$(".search-input").val();
		var _this=this;
		$.ajax({
			type:"get",
			url:"https://m.lagou.com/search.json?",
			data:"city="+city+"&positionName="+Name+"&pageNo=1&pageSize=15",
			dataType:"json",
			success:function(data){
				console.log(data)
				_this.setState({
					List:_this.state.List.concat(data.content.data.page.result)
				})
				console.log(_this.state.List)
			}
		});
		$(".positionlist").css("display","block");
	}
}
export default Search;
