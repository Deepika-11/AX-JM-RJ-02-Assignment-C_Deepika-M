import React, { Component } from 'react';
import './App.css';
import UserInput from './component/UserInput';
import UserOutput from './component/UserOutput';


class App extends Component {
  state = {
    users: [
      { username: "Arul" },
      { username: "Deepika" },
      { username: "HBK" }
    ]
  };


  userNameChangedHandler = (event) => {
    this.setState({
      users: [
        { username: event.target.value },
        { username: "Deepika" },
        { username: "HBK" }
      ]
    });
  }


  render() {
    var outputs = [];

    for (var user of this.state.users) {
      outputs.push(
        <UserOutput username = { user.username }/>
      );
    }

    return (
      <div className="App">
        <UserInput username = { this.state.users[0].username } changed = { this.userNameChangedHandler } />

        { outputs }
      </div>
    );
  }
}

export default App;
