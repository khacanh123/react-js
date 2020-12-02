import React, { Component } from 'react';

class MessContent extends Component {
    render() {
        return (
            <div className="mesgs">
        <div className="msg_history">
         {/* nguoi gui */}
          <div className="outgoing_msg"> 
            <div className="sent_msg">
              <p>Apollo University, Delhi, India Test</p>
              <span className="time_date"> 11:01 AM    |    Today</span> </div>
          </div>
          {/* nguoi nhan */}
          <div className="incoming_msg">
            <div className="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
            <div className="received_msg">
              <div className="received_withd_msg">
                <p>We work directly with our designers and suppliers,
                  and sell direct to you, which means quality, exclusive
                  products, at a price anyone can afford.</p>
                <span className="time_date"> 11:01 AM    |    Today</span></div>
            </div>
          </div>
        </div>
        <div className="type_msg">
          <div className="input_msg_write">
            <input type="text" className="write_msg" placeholder="Type a message" />
            <button className="msg_send_btn" type="button"><i className="fa fa-paper-plane-o" aria-hidden="true" /></button>
          </div>
        </div>
      </div>
        );
    }
}

export default MessContent;