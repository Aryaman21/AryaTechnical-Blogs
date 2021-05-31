import React, { useState } from 'react';
import '../App.css';
import { Redirect } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
import secret from './secret';

var x = 0;
//const {REACT_APP_ADMIN_NAME, REACT_APP_ADMIN_PASS} = process.env;
const Admin = () => {
    const[username,setUsername] = useState('');
    const[path,setPath] = useState('/admin');
    const[age,setAge] = useState('');
      function mySubmitHandler(event){
        event.preventDefault();
        if (!age || !username) {
          alert("Enter all the credentials properly!!");
        }
        else if(username!== secret.REACT_APP_ADMIN_NAME || age!== secret.REACT_APP_ADMIN_PASS){
          alert("Invalid credentials!!");
        }
        else{
          x = 1;
          setPath('/adminPg');
        }
      }
      function myChangeHandler(event){
          if(event.target.name==='username'){
            setUsername(event.target.value);
          }
          else{
            setAge(event.target.value);
          }
      }
      function Home(){
          setPath('/');
      }
      if(path==='/'){
        return <Redirect to='/'/>;
      }
      else if(path==='/adminPg'){
        return <Redirect to='/adminPg'/>;
      }
    return (
        <div className="App" style={{border:"5px solid white"}}>
        <div className="App-header">
            <form onSubmit={mySubmitHandler} autoComplete="off">
            <h1>{`Hello!! ${username}`}</h1>
            <div className="form-group">
                <label>Username:</label>
                <input className="form-control form-control-lg"
                type='text'
                name='username'
                onChange={myChangeHandler}
                />
            </div>
            <div className="form-group">
                <label>Password:</label>
                <input className="form-control form-control-lg"
                type='password'
                name='age'
                onChange={myChangeHandler}
                />
            </div>
            <button style={{marginRight:"20%"}} className="btn btn-success" type='submit'>submit</button>
            <button onClick={Home} className="btn btn-danger">Home</button>
            </form>
        </div>
        </div>
    )
  }

  export {x};
  export default Admin;