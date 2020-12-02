import React, { Component } from 'react';
import './mess.css';
import swal from 'sweetalert';
import MessContent from './MessContent';
class ListUser extends Component {
  constructor(props) {
    super(props);
    this.state ={
      active:''
    }
  }
  
  ShowUser=()=>{
    swal("Good job!", "You clicked the button!", "success");
    this.setState({active:'active_chat'});
  }
    render() {
        return (
            <div className="container">
  <h3 className=" text-center">Messaging</h3>
  <div className="messaging">
    <div className="inbox_msg">
      <div className="inbox_people">
        <div className="headind_srch">
          <div className="recent_heading">
            <h4>Recent</h4>
          </div>
          <div className="srch_bar">
            <div className="stylish-input-group">
              <input type="text" className="search-bar" placeholder="Search" />
              <span className="input-group-addon">
                <button type="button"> <i className="fa fa-search" aria-hidden="true" /> </button>
              </span> </div>
          </div>
        </div>
        <div className="inbox_chat">
          <div className={'chat_list '+this.state.active} onClick={()=>this.ShowUser()}>
            <div className="chat_people">
              <div className="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
              <div className="chat_ib">
                <h5>Sunil Rajput </h5>
               
              </div>
            </div>
          </div>
          
          
          
         
         
          
        </div>
      </div>
      <MessContent />
    </div>
    <p className="text-center top_spac"> Design by <a target="_blank" href="#">Sunil Rajput</a></p>
  </div></div>

        );
    }
}

export default ListUser;