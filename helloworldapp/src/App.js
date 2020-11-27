import React, { Component } from 'react'
import Home from './components/home'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export class App extends Component {
  render() {
    return (
        <div className="app-main">
        <Router>
        <Switch>
            <Route path="">
              <Home />
            </Route>
        </Switch>
        </Router>
    </div>
);
}
}

export default App
