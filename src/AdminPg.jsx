import React, { useState } from 'react';
import { TextBoxComponent } from '@syncfusion/ej2-react-inputs';
import './App.css';
import { Redirect } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
import db from'./util/firebase';
import {x} from './AdminModule/Admin';

const AdminPg = () => {
    const[portal,setPortal] = useState('');
    const[path,setPath] = useState('/admin/adminPg');
    const[qsol,setQsol] = useState(['','']);

    // useEffect(()=>{
    //   db.collection(portal).onSnapshot(snapshot=>{
    //     setQsol(snapshot.docs.map(doc=>[doc.data().gfgques,doc.data().gfgsol]))
    //     //console.log(snapshot.docs.map(doc=>doc.data().gfgques));
    //   })
    // },[])

      function mySubmitHandler(event){
        event.preventDefault();
        if (!qsol[0] || !qsol[1] || !portal) {
          alert("Enter all the credentials!!");
        }
        else if(portal==="gfg" || portal==="codeforces" || portal==="hackerrank"){
          db.collection(portal).add({
            gfgques: qsol[0],
            gfgsol: qsol[1]
          })
          alert(`Data entry done on ${portal} portal`);
        }
        else{
          alert("Enter a proper value for the portal");
        }
        setQsol(['','']);
        setPortal('');
      }
      function myChangeHandler(event){
        if(event.target.name==='portal'){
          setPortal(event.target.value);
        }
        if(event.target.name==='ques'){
          setQsol([event.target.value,qsol[1]]);
        }
        else if(event.target.name==='code'){
          setQsol([qsol[0],event.target.value]);
        }
      }
      function Home(){
          setPath('/');
      }
      if(path==='/'){
        return <Redirect to='/'/>;
      }
    return (
      <div>
        {x===1 ? <div className="App" style={{border:"5px solid white"}}>
        <div className="App-header">
            <form onSubmit={mySubmitHandler} autoComplete="off">
            <div className="form-group">
                <label>Portal:</label>
                <div className="multiline">
                  <TextBoxComponent name="portal"  multiline={true} onChange={myChangeHandler} value={portal}/>
                </div>
            </div>
            <div className="form-group">
                <label>Question:</label>
                <div className="multiline">
                  <TextBoxComponent name="ques" onChange={myChangeHandler}  multiline={true} value={qsol[0]}/>
                </div>
            </div>
            <div className="form-group">
                <label>Code:</label>
                <div className="multiline">
                  <TextBoxComponent name="code" onChange={myChangeHandler} multiline={true} value={qsol[1]}/>
                </div>
            </div>
            <button style={{marginRight:"20%"}} className="btn btn-success" type='submit'>submit</button>
            <button onClick={Home} className="btn btn-danger">Home</button>
            </form>
        </div>
        </div> : <h2>You are not authorized to access this page</h2>}
      </div>
    )
  }

  export default AdminPg;