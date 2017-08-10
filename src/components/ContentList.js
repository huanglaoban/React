
import React ,{Component} from 'react';
import PropTypes from 'prop-types';
import ContentItem from './ContentItem';

class ContentList extends Component {
    constructor(){
    	super();
    }
	render(){
		var _this = this;
        var list = this.props.contentList.map(function(elem) {
        	return <ContentItem content = {elem} key={elem.id} onDelete={_this.props.onDelete} />;
        })
               
		return(
               <div>
                   <ul>
                         {list}
                   </ul>
               </div>
			)
	}
}

ContentList.propTypes ={
	contentList:PropTypes.array
}

export default ContentList