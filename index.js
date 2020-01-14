import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import {Login} from './login'
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <Login></Login>
    );
  }
}

render(<App />, document.getElementById('root'));
