import React, {useState} from 'react';
import firebase from '../firebase';
import NavBar from '../PageLayout/NavBar';
import Footer from '../PageLayout/Footer';
import ListPost from './ListPost';
import { Input, Row,Col,Upload, message, Spin, Space,Button } from 'antd';
import { useHistory, Redirect } from "react-router-dom";
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';

const { TextArea } = Input;
const Post = () =>{
    const history = useHistory();
    const user = localStorage.getItem('login');
   
    const [loading,setLoading] = useState(false);
    const [imgUrl,setImgUrl] = useState(null);
    const [imgName,setImgName] = useState(null);
    const [content,setContent] = useState('');
    const [linkImg, setLinkImg] = useState('');
    function getBase64(img, callback) {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
      }
      const submitPost = (e) => {
          e.preventDefault();
          const tragthai = firebase.database().ref('trangthai');
      const tt ={
          author: 'anhhin',
          content: content
      }
      tragthai.push(tt);
      alert('Đăng trạng thái thành công');
      setContent('');
    }
    const handleOnChange = (e) => {
      setContent(e.target.value);
      
    };
      function beforeUpload(file) {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
          message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
          message.error('Image must smaller than 2MB!');
        }
        return isJpgOrPng && isLt2M;
      }
      function handleChange (info) {
        if (info.file.status === 'uploading') {
          setLoading(true)
          return;
        }
        if (info.file.status === 'done') {
            const name = info.file.name;
            setImgName(name);
          // Get this url from response in real world.
          getBase64(info.file.originFileObj, imageUrl =>
           setImgUrl(imageUrl),setLoading(false),
          );
          
        }
      };
      
      const uploadButton = (
        <div>
          {loading ? <LoadingOutlined /> : <PlusOutlined />}
          <div className="ant-upload-text">Upload</div>
        </div>
      );
      const  urlimg  = imgUrl;
      
    return (
        <>
        <NavBar />
            <div className="col-lg-6 borded-over container">
            <Row>
      <Col span={24}>
          <form onSubmit={(e)=>submitPost(e)}>
              <TextArea rows={4} style={{width: '100%', border:'1px solid red', marginTop:'20px'}} onChange={(e)=>handleOnChange(e)} defaultValue={content}></TextArea>
                <br />
                {/* <Upload
        name="avatar"
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {urlimg ? <img src={urlimg} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
      </Upload> */}
                <button className="btn btn-primary"  style={{width: '100%'}}>Đăng trạng thái</button>
          </form>

      </Col>
    </Row>
                <ListPost />
            </div>
        <Footer />
        </>
    )
}
export default Post;