import "./App.css";
import React from "react";
import logo from './assets/bridgelabzlogo.jpg'
class App extends React.Component {
  url = "https://www.bridgelabz.com/"
  constructor() {
    super();
    this.state = {
      userName : '',
      nameError: ''
    }
  }

  // ClickHandlerFunction
  clickHandler = ($event) =>{
    console.log('Save Button is clicked!',$event);
    window.open(this.url,'_blank');
  }

  // NameChangeHandler
  nameChangeHandler =(event) =>{
    console.log("Value is ", event.target.value);
    const NAME_REGEX=RegExp('^[A-Z]{1}[a-z\\s]{2,}$');
    // see the title using setState Method
    this.setState({userName: event.target.value});    
    if(NAME_REGEX.test(event.target.value)) {
        this.setState({nameError: ''})
    } else {
        this.setState({nameError: 'Name is Incorrect'})
    }  
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
          <span className="error-output">{this.state.nameError}</span>
        </div>
      </div>
    );
  }
}

export default App;
