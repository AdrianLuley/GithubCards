import React, { Component } from 'react';

import './App.css';

class App extends Component {
  state = {
    user: {},
    active:false
  }
 handleClick = () => {
  console.log("Clicked ME");
  fetch("https://api.github.com/users/AdrianLuley")
  .then(response => {
    return response.json();
  })
  .then(myJson => {
    console.log(myJson);
    this.setState({
      user: myJson,
      active: true
    })
  });
  }
  render() {
    return (
      <button onClick={this.handleClick}>Click me</button>
    );
  }
}

export default App;
