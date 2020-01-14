import React, { Component } from 'react';
import { render } from 'react-dom';



export class Login extends React.Component{
 constructor(){

 }
  render(){
    return(
      <div>
      <form>
      UserName: <input type="text"/><br/>
      Password: <input type="passsword"/><br/>
      <button>Login</button>
      </form>
      </div>
    );
  }
}