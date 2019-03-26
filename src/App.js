import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      number:0
    }
  }
  render() {
    return (
      <div>
        <h1 class="value">{this.state.number}</h1>
        <button onClick={this.addOne.bind(this)}>Incrementa</button>
      </div>
    );
  }
  addOne(){
    this.setState({      
      number : this.state.number + 1
    });
  }
}

export default App;
