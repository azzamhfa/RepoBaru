import React, { Component } from "react";
import "./NavBar.scss";
import Button from "./component/Button.js";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container-header">
        <div className="header">
          <div className="app-name">KUY-KULINERIN!</div>
        </div>
        <div className = "tombol">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default NavBar;
