import React from 'react';
import axios from 'axios';

class Form extends React.Component{
  
  constructor(props) {
	super(props);
	this.state = {
  	photoData:'',
  	email: ''
	}
  }
  handle(e){
    e.preventDefault();
    const{qrUrl}=this.props.qrUrl;
    axios.get(`${qrUrl}`)
  .then(
    (response) => response.json()
  ).then((data) => {
    this.setState({
      photoData:data
  }).then({
      method: "POST", 
      url:"http://localhost:3000/send", 
      data:  this.state.photoData
    }).then((response)=>{
      if (response.data.status === 'success'){
        alert("Message Sent."); 
        this.resetForm()
      }else if(response.data.status === 'fail'){
        alert("Message failed to send.")
      }
    })
  
   });
  }
  
  
  

  handleSubmit(e){
    e.preventDefault();
    axios.post({
      method: "POST", 
      url:"http://localhost:3002/send", 
      data:  this.state
    }).then((response)=>{
      if (response.data.status === 'success'){
        alert("Message Sent."); 
        this.resetForm()
      }else if(response.data.status === 'fail'){
        alert("Message failed to send.")
      }
    });
  }

  
  
  
  render() {
    
  
     return(
  	<div className="App">
  	<form id="contact-form" onSubmit={this.handleSubmit.bind(this)} onClick={this.handle.bind(this)} method="POST">
  	
      	
  	<div className="form-group">
      	<label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)}  />
  	</div>
  	
  	
  	</form>
  	</div>
   );

 }
 onEmailChange(event) {
	this.setState({email: event.target.value})
  }
}




export default Form;