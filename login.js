import React, { Component } from 'react';
import { render,useHistory } from 'react-dom';



export class Login extends React.Component{
 constructor(){

 }

 login(){
   //AJAX Call--
  const userHistory=useHistory();
  userHistory.push("/home");
 }
  render(){
    return(
      <div className="container lgtop">
         <div className="row">
          <div className="col-md-4 col-xs-4 aln" >
              <label htmlFor="usr">User Name:</label>
          </div>
          <div className="col-md-3 col-lg-3">
           <input type="text" className="form-control" id="usr"/>
          </div>
        </div>
          <div className="row">
              <div className="col-md-4 col-xs-4 aln">
                <label htmlFor="pwd">Password:</label>
              </div>
              <div className="col-md-6 col-lg-3">
              <input type="password"  className="form-control"v id="pwd"/>
              </div>
          </div>
          <div className="row justify-content-center">

              <div >
              <button type="button" className="btn btn-primary lgbtn" onClick={()=>{this.login}}>Login
              </button>
              </div>
          </div>
      </div>
    );
  }
}