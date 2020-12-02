import React, { Component } from 'react';
import List from './List';
import firebase from '../firebase';
class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content:''
        }
    }
    isChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    submitForm = (e)=>{
        e.preventDefault();
        const tragthai = firebase.database().ref('trangthai');
        const content= this.state.content;
        const tt ={
            author: 'anhhin',
            content: content
        }
        tragthai.push(tt);
        alert('Đăng trạng thái thành công');
    }
    render() {
        return (
            <>
            
                <form onSubmit={(e)=>this.submitForm(e)}>
  <div className="form-group">
    <label htmlFor="email">Email address:</label>
    <input type="text" className="form-control" name="content" defaultValue={this.state.content} placeholder="Enter email" id="email" onChange={(e)=>this.isChange(e)} />
  </div>
  
  <div className="form-group form-check">
    <label className="form-check-label">
      <input className="form-check-input" type="checkbox" /> Remember me
    </label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
<List />
            </>
        );
    }
}

export default Form;