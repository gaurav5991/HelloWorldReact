import "./App.css";
import React from "react";
import logo from './assets/bridgelabzlogo.jpg'
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Hello from Bridgelabz",
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <img
          src={logo}
          alt="The BridgeLabz logo: A Bridge to Employement through lab works"
        />
      </div>
    );
  }
}

export default App;
