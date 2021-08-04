import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.scss";
import Store from './Redux/store.provider'
import Login from './Components/Users/userlogin'

class App extends Component {
  render() {
    return (
      <Store>
      
        <Router>
          <Switch>
            <Route path="/" exact component={Login} />
          </Switch>
        </Router>
      
      </Store>
    );
  }
}

export default App;