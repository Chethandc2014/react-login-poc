import React, { Component } from 'react';
import { render } from 'react-dom';



export class Login extends React.Component{
 constructor(){

 }
  render(){
    return(
      <div className="container lgtop">
         <div className="row">
          <div className="col-md-4 col-xs-4 aln" >
              <label for="usr">User Name:</label>
          </div>
          <div className="col-md-3 col-lg-3">
           <input type="text" className="form-control" id="usr"/>
          </div>
        </div>
          <div className="row">
              <div className="col-md-4 col-xs-4 aln">
                <label for="pwd">Password:</label>
              </div>
              <div className="col-md-6 col-lg-3">
              <input type="password"  className="form-control"v id="pwd"/>
              </div>
          </div>
          <div className="row justify-content-center">

              <div >
              <button type="button" className="btn btn-primary lgbtn">Login
              </button>
              </div>
          </div>
      </div>
    );
  }
}