import React, { Component } from "react";
import { browserHistory } from "react-router";
import "./button-ico.scss";

class Button extends Component {
  // onNavigate() {
  //   browserHistory.push("/");
  // }

  render() {
    return (
      <div className="Button">
        <button
          className={`btn ${this.props.type}`}
          onClick={this.props.diTekan}
        >
          {this.props.text}
        </button>
      </div>
    );
  }
}

export default Button;
