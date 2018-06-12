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
      active: !this.state.active
    })
  });
  }
  render() {
    return (
      <div>
      <button onClick={this.handleClick}>Click me</button>
        {this.state.active &&
        <div class="box">
        <p>{this.state.user.name}</p> 
        <img src={this.state.user.avatar_url}/>
        <p>{this.state.user.company}</p>
        <p>{this.state.user.public_repos}</p>
        </div>
      }
      </div>
    );
  }
}

export default App;
