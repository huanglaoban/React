import React ,{Component} from 'react';

class ContentForm extends Component {
    constructor(){
    	super();
    	this.state = {
    		id:'',
    		title:"放假了干嘛？",
    		detail:""
    	}
    	this.handleSubmit = this.handleSubmit.bind(this);
    	this.handleChange = this.handleChange.bind(this);
    }
	render(){
        
		return(
               <div style={{marginTop:"20px"}}>
                  <textarea value={this.state.detail} onChange={this.handleChange} className="form-control" rows="3" placeholder="评论20个字可以抽奖哦..."></textarea>
                  <button className="btn btn-primary btn-block" onClick={this.handleSubmit}>提交评论</button>
               </div>
			)
	}
	handleSubmit(){
		if (!this.state.detail) return;
		
        this.state.id = new Date().getTime();

        this.props.onsetContent(this.state);
         
        this.setState({
        	detail:""
        }); 
	}
	handleChange(e){
		this.setState({
			detail:e.target.value
		})
	}
}

export default ContentForm