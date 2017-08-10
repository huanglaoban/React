import React, { Component } from 'react';
import {IndexLink,Link} from "react-router";
import './App.css';
import "./iconfont.css";
class App extends Component {
	
  render() {
    return (
      <div className="App">
      	<div className="header">拉勾网</div>
      	{this.props.children}
      	<ul className="footer">
      		<li><IndexLink to="/" activeClassName="active" className="li" ><i className="iconfont icon-dvt-home"></i>职位</IndexLink></li>
      		<li><Link to="/Search" activeClassName="active" className="li"><i className="iconfont icon-search"></i>搜索</Link></li>
      		<li><Link to="/My" activeClassName="active" className="li"><i className="iconfont icon-wode"></i>我的</Link></li>
      	</ul>
      </div>
    );
  }
  
  
}

export default App;
