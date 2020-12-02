import React, { useState, useEffect } from 'react';
import firebase from '../firebase';
import { LikeOutlined, CommentOutlined } from '@ant-design/icons';

const ListPost = () => {
  const [todoList, setTodoList] = useState();
  const [like, setLike] = useState('');
  const [cmt, setCmt] = useState(false);

  useEffect(() => {
    const todoRef = firebase.database().ref('trangthai');
    todoRef.on('value', (snapshot) => {
      const todos = snapshot.val();
      const todoList = [];
      for (let id in todos) {
        todoList.push({ id, ...todos[id] });
      }
      setTodoList(todoList);
    });
  }, []);
  const LikePost = () =>{
    alert('hihi');
  }
  const commentPost = (id) =>{

  }
  return (
    <div>
      {todoList
        ? todoList.map((todo, index) => (
            <>
                <h3 key={index}>{todo.author}</h3>
                <hr />
                <p>{todo.content}</p>
                <table className="table table-bordered text-center">
                  <tr>
                    <td style={{fontSize: '18px'}} onClick={()=>LikePost()}>
                    <LikeOutlined /> Thích
                    </td>
                    <td style={{fontSize: '18px'}} onClick={(id)=>commentPost(todo.id)}>
                    <CommentOutlined /> Bình luận
                    </td>
                  </tr>
                </table>
            </>
        ))
        : ''}
    </div>
  );
}
export default ListPost;