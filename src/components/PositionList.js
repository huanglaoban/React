import React,{Component} from "react";
import PositionItem from "./PositionItem";
import PropTypes from 'prop-types';
import $ from "jquery";
class PositionList extends Component{
	constructor(){
		super();
		this.state={
			_list:[],
			page:1
		};
		
		this.handleClick=this.handleClick.bind(this);
	}
	render(){
			
      	  	var list = this.props.List.map(function(elem) {
        	return <PositionItem content = {elem}  key={elem.positionId}/>;
        })
		return(
				
				<ul className="positionlist">
					{list}
					<li className="list-more" onClick={this.handleClick}>加载更多</li>
					<div className="copybox">
						<p>©2015 lagou.com, all right reserved</p>
						<div className="copy-item">
							<span className="active">移动版&nbsp;.&nbsp;</span>
							<span className="computer">电脑版&nbsp;.&nbsp;</span>
							<span className="totop" >回顶部</span>
						</div>
					</div>
				</ul>
			
		)
	}
	
	handleClick(){
		
		var _this=this;
		let page=this.state.page+1;
		$.ajax({
			type:"get",
			url:"https://m.lagou.com/listmore.json?pageNo="+page+"&pageSize=15",
			dataType:"json",
			success:function(data){
				console.log(data)
				_this.setState({
					_list:_this.state._list.concat(data.content.data.page.result),
					page:page
				})
				
				_this.props.onGetJobListMore(_this.state._list);
			}
			
		});
		this.setState({
				_list:[]
			})
		
	}
	
}
PositionList.propTypes ={
	List:PropTypes.array
}
export default PositionList;
