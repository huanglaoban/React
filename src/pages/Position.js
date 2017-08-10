import React,{Component} from "react";
import "./Position.css";
import PositionList from "../components/PositionList";
import $ from "jquery";

class Position extends Component{
	constructor(){
		super();
		this.state={
			List:[],
			page:1
		};
		 this.getjobList = this.getjobList.bind(this);
	}
	render(){
		return(
			<div>
				<div className="content">
					<div className="top">
						<span >10秒钟定制职位</span>
						<a href="http://localhost:3000/#/Login" className="go">去登录</a>
					</div>
				</div>
				<PositionList List={this.state.List} onGetJobListMore={this.getjobList}/>
				
			</div>
		)
	}
	componentDidMount(){
		
		var _this=this;
		$.ajax({
			type:"get",
			url:"https://m.lagou.com/listmore.json?",
			data:"pageNo="+this.state.page+"&pageSize=15",
			dataType:"json",
			success:function(data){
				console.log(data)
				_this.setState({
					List:_this.state.List.concat(data.content.data.page.result)
				})
				console.log(_this.state.List)
			}
		});
		 
		if(typeof(localStorage.commentList)!=="undefined"){
			$(".go").html("去编辑")
		}
				
	}
	
	getjobList(obj){
		
		 var list = [...this.state.List,...obj];
		
		this.setState({
          List:list
		})
	}
	
}
export default Position