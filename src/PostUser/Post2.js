import React, { Component } from 'react';
import FileUploader from "react-firebase-file-uploader";
import firebase from '../firebase';
import NavBar from '../PageLayout/NavBar';
import Footer from '../PageLayout/Footer';
import { Input, Row,Col,Upload, message, Spin, Space,Button } from 'antd';
const { TextArea } = Input;

class Post2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            avatar: "",
            isUploading: false,
            progress: 0,
            avatarURL: ""
        }
    }
    handleChangeUsername = event =>
    this.setState({ username: event.target.value });
  handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
  handleProgress = progress => this.setState({ progress });
  handleUploadError = error => {
    this.setState({ isUploading: false });
    console.error(error);
  };
  handleUploadSuccess = filename => {
    this.setState({ avatar: filename, progress: 100, isUploading: false });
    firebase
      .storage()
      .ref("images")
      .child(filename)
      .getDownloadURL()
      .then(url => this.setState({ avatarURL: url }));
  };
  submitPost = (e) => {
    e.preventDefault();
   
  alert('add thành công rồi');
}
 handleOnChange = (e) => {

};
    render() {
        
          
        return (
            <>
<NavBar />
            <div className="col-lg-6 borded-over container">
            <Row>
      <Col span={24}>
          <form onSubmit={(e)=>this.submitPost(e)}>
              <TextArea rows={4} style={{width: '100%', border:'1px solid red', marginTop:'5px'}} onChange={(e)=>this.handleOnChange(e)}></TextArea>
                <br />
                {this.state.avatarURL && <img src={this.state.avatarURL} />}
          <FileUploader
            accept="image/*"
            name="avatar"
            randomizeFilename
            storageRef={firebase.storage().ref("images")}
            onUploadStart={this.handleUploadStart}
            onUploadError={this.handleUploadError}
            onUploadSuccess={this.handleUploadSuccess}
            onProgress={this.handleProgress}
          />
                <button className="btn btn-primary"  style={{width: '100%'}}>Đăng trạng thái</button>
          </form>

      </Col>
    </Row>
                
            </div>
        <Footer />
      </>
        );
    }
}

export default Post2;