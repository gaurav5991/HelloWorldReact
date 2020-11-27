import "./App.css";
import React from "react";
import logo from './assets/bridgelabzlogo.jpg'
class App extends React.Component {
  url = "https://www.bridgelabz.com/"
  constructor() {
    super();
    this.state = {
      userName : ''
    }
  }

  // ClickHandlerFunction
  clickHandler = ($event) =>{
    console.log('Save Button is clicked!',$event);
    window.open(this.url,'_blank');
  }

  // NameChangeHandler
  nameChangeHandler =(event) =>{
    console.log("value is ", event.target.value);
    // see the title using setState Method
    this.setState(
      {userName : event.target.value}
    )
  }

  render() {
    return (
      <div>
        <div>
        <h1>Hello {this.state.userName} from BridgeLabz</h1>
        <img
          src={logo} onClick={this.clickHandler}
          alt="The BridgeLabz logo: A Bridge to Employement through lab works"
        />
        </div>
        <div className='text-box'>
          <input onChange={this.nameChangeHandler}/>
        </div>
      </div>
    );
  }
}

export default App;
