import "./App.css";
import React from "react";
import logo from './assets/bridgelabzlogo.jpg'
class App extends React.Component {
  url = "https://www.bridgelabz.com/"
  constructor() {
    super();
    this.state = {
      title: "Hello from Bridgelabz",
    };
  }

  // ClickHandlerFunction
  clickHandler = ($event) =>{
    console.log('Save Button is clicked!',$event);
    window.open(this.url,'_blank');
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <img
          src={logo} onClick={this.clickHandler}
          alt="The BridgeLabz logo: A Bridge to Employement through lab works"
        />
      </div>
    );
  }
}

export default App;
