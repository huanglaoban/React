import React ,{Component} from 'react';

class ContentItem extends Component {
    constructor(){
    	super();
    	this.handleDelete =this.handleDelete.bind(this);
    }
	render(){
        let {content} = this.props;
		return(
              <li className="list-group-item">
                  <div className="list-group">
					  <a href="javascript:void(0)" className="list-group-item active">
					    <h4 className="list-group-item-heading">{content.title}</h4>
					    <p className="list-group-item-text">{content.detail}</p>
					    <button className="btn" onClick={this.handleDelete} data-id={content.id}>删除当前</button>	
					  </a>
					</div>
              </li>
			)
	}
	handleDelete(e){
		this.props.onDelete(e.target.dataset.id);
	}
}

export default ContentItem