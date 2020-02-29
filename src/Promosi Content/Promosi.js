import React, { Component } from "react";
import "./Promosi.scss";

class Promosi extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="Promo">
        <div className="Coba">{this.props.children}</div>
      </div>
    );
  }
}

export default Promosi;
