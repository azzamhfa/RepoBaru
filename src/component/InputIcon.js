import React, { Component } from "react";
import "./input-icon.scss";

class InputIcon extends Component {
  render() {
    return (
      <div className="input-icon">
        <label>
          <i className={`${this.props.iconType} icon`} />
        </label>
        <input
          id={this.props.id}
          placeholder={this.props.placeholder}
          type={this.props.id}
          onChange={data => this.props.onTyping(data)}
        />
      </div>
    );
  }
}

export default InputIcon;
