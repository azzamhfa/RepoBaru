import React, { Component } from "react";
import "../App.css";
import "../component/center-view.scss";
import "../component/input-icon.scss";
import "../component/card-auth.scss";
import InputIcon from "../component/InputIcon.js";
import Button from "../component/Button.js";
import "../Background.scss";

class Register extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="BG">
        <div className="center-view">
          <div className="card-auth">
            <div className="regist">
              <div className="title">{"REGISTER"}</div>
              <div className="content">
                <InputIcon iconType="user" placeholder="nama" />
                <InputIcon iconType="user" placeholder="username" />
                <InputIcon iconType="mail" placeholder="email" />
                <InputIcon iconType="lock" placeholder="password" />
                <InputIcon iconType="lock" placeholder="confirm password" />
              </div>
              <div className="action">
                <Button
                  type="primary"
                  text={"Register"}
                  onClick={() => {
                    window.location.href = "/";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
