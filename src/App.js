import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import "./component/center-view.scss";
import "./component/input-icon.scss";
import "./component/card-auth.scss";
import InputIcon from "./component/InputIcon.js";
import Button from "./component/Button.js";
import Register from "./Page/Register";
import Login from "./Page/Login.js";
import Home from "./Page/HomeAwal.js";
import HomeBiasa from "./Page/HomeBiasa.js";
import Profile from "./Page/Profile";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/register"
            render={props => <Register {...props} />}
          />
          <Route exact path="/login" render={props => <Login {...props} />} />
          <Route
            exact
            path="/profile"
            render={props => <Profile {...props} />}
          />
          <Route exact path="/" render={props => <Home {...props} />} />
        </Switch>
      </BrowserRouter>
    );
  }
}
