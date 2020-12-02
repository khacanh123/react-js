// import React, { Component } from 'react';
// import './login.css';
// class Login extends Component {
//     render() {
//         const user = localStorage.getItem('login');
//         if(user){
//             window.location.href = '/';
//         }
//         return (
//             <>
//               <div className="login-wrap">
//   <div className="login-html">
//     <input id="tab-1" type="radio" name="tab" className="sign-in" defaultChecked /><label htmlFor="tab-1" className="tab">Đăng nhập</label>
//     <input id="tab-2" type="radio" name="tab" className="for-pwd" /><label htmlFor="tab-2" className="tab">Quên mật khẩu</label>
//     <div className="login-form">
//       <div className="sign-in-htm">
//         <div className="group">
//           <label htmlFor="user" className="label">Tên đăng nhập</label>
//           <input id="user" type="text" className="input" />
//         </div>
//         <div className="group">
//           <label htmlFor="pass" className="label">Mật khẩu</label>
//           <input id="pass" type="password" className="input" data-type="password" />
//         </div>
//         <div className="group">
//           <input type="submit" className="button" defaultValue="Đăng nhập" />
//         </div>
//         <div className="hr" />
//       </div>
//       <div className="for-pwd-htm">
//         <div className="group">
//           <label htmlFor="user" className="label">Email</label>
//           <input id="user" type="text" className="input" />
//         </div>
//         <div className="group">
//           <input type="submit" className="button" defaultValue="Gửi lại mật khẩu" />
//         </div>
//         <div className="hr" />
//       </div>
//     </div>
//   </div>
// </div>
  
//             </>
//         );
//     }
// }

// export default Login;
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Row, Col, Form, Input, Button, Checkbox } from 'antd';
import { useHistory, Redirect } from "react-router-dom";
import swal from 'sweetalert';
import firebase from '../firebase';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};


const Login = () => {
  const history = useHistory();
  const [data, setData] = useState(null);
  const [status, setStatus] = useState(false);
  const onFinish = values => {
    //console.log('Success:', values);
    // const twoRef = firebase.database().ref('trangthai');
    // twoRef.on('value', (snapshot) => {
    //   const todos = snapshot.val();
    //   const todoList = [];
    //   for (let id in todos) {
    //     todoList.push({ id, ...todos[id] });
    //   }
    //   setData(todoList);
    // });
    // console.log(data);
    // data.forEach(val => {
    //   if(val.author == values.username && val.content == values.password){
    //     setStatus(true);
    //   }
    // });
    if(values.username == 'admin' && values.password =='123'){
      // cho vao trang home page
      localStorage.setItem('login',true);
      swal("Good job!", "You clicked the button!", "success");
      window.location.href = '/post';
    } else {
      // van o lai trang login
      swal("Lỗi!", "Đăng nhập thất bại", "error");
      history.push('/login?state=fail');
    }
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Row className="col-lg-8 container">
      <Col span={12} offset={6}>
        
        <h1 className="text-center">Hin Shop - Trang đăng nhập</h1>
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default Login;