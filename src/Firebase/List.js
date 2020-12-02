import React, { useState, useEffect } from 'react';
import firebase from '../firebase';
const List = () =>{
    const [todoList, setTodoList] = useState();
    const [visable, setVisable] = useState(false);
  
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
      const modalEdit = (id) => {
          alert('id là'+ id);
          const todoRef = firebase.database().ref('trangthai').child(id);
        //   console.log(todoRef);
        todoRef.on('value', (snapshot) => {
            const todos = snapshot.val();
            setTodoList(todos);
            // setTodoList(todoList);
            console.log(todoList);
            setVisable(true);
           
          });
          const checkForm = ()=>{
            if(visable){
                return editForm();
            }
        }
          const editForm = ()=> {
            return(
                <form onSubmit={(e)=>this.submitForm(e)}>
  <div className="form-group">
    <label htmlFor="email">Email address:</label>
    <input type="text" className="form-control" name="content" placeholder="Enter email" id="email" onChange={(e)=>this.isChange(e)} />
  </div>
  
  <div className="form-group form-check">
    <label className="form-check-label">
      <input className="form-check-input" type="checkbox" /> Remember me
    </label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
            )
          }
          
      }
      return (
        <div className="row">
           <div className="col-sm-6">
          {todoList
            ? todoList.map((todo, index) => (
                <>
                    <h3 key={index}>{todo.author}</h3>
                    <hr />
                    <p>{todo.content}</p>
                    <table className="table table-bordered text-center">
                      <tr>
                        <td style={{fontSize: '18px'}} onClick={(id)=>modalEdit(todo.id)}>
                        sửa
                        </td>
                        <td style={{fontSize: '18px'}} onClick>
                        Xóa
                        </td>
                      </tr>
                    </table>
                </>
            ))
            : ''}
            </div>
                <div className="col-sm-3">
                  
                </div>
        </div>
      );
}
export default List;