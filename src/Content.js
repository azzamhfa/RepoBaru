import React, { Component } from "react";
import Promosi from "./Promosi Content/Promosi";
import "./Container.scss";
import CardBox from "./CardBox/CardBox.js";
import Cardboard from "./CardBox/CardBoard.js";
class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Content;
