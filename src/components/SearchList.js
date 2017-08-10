import React,{Component} from "react";
import SearchItem from "./SearchItem";
import PropTypes from 'prop-types';
import $ from "jquery";
class SearchList extends Component{
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
        	return <SearchItem content = {elem}  key={elem.positionId}/>;
        })
		return(
				
				<ul className="positionlist">
					{list}
					<li className="list-more" onClick={this.handleClick}>加载更多</li>
					
				</ul>
			
		)
	}
	
	handleClick(){
		this.setState({
				_list:[]
			})
		var city=$(".allcity").html();
		var Name=$(".search-input").val();
		var _this=this;
		let page=this.state.page+1;
		$.ajax({
			type:"get",
			url:"https://m.lagou.com/search.json?",
			data:"city="+city+"&positionName="+Name+"&pageNo="+page+"&pageSize=15",
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
SearchList.propTypes ={
	List:PropTypes.array
}
export default SearchList;
