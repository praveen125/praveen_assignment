import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import Details from "./components/Details";
import TableData from "./components/TableData";
import test from './components/test'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              <Homepage
              // onChangeHandler={this.onChangeHandler}
              />
            </Route>
            <Route path="/details">
              <Details />
            </Route>
            <Route path="/table">
              <TableData />
            </Route>
          <  Route path='/test' component={test} />
          </Switch>
        </Router>
      </div>
    );
  }
}
export default App;
