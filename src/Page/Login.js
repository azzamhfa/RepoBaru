import React, { Component } from "react";
import "../App.css";
import "../component/center-view.scss";
import "../component/input-icon.scss";
import "../component/card-auth.scss";
import InputIcon from "../component/InputIcon.js";
import Button from "../component/Button.js";
import "../Background.scss";
import Axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { userData: {} };
  }

  handler = e => {
    let id = e.target.id;
    let value = e.target.value;
    this.setState(prevState => ({
      userData: {
        ...prevState.userData,
        [id]: value
      }
    }));
  };

  onSend = async () => {
    if (this.state.userData.email && this.state.userData.password) {
      this.setState({ status: false });
      try {
        let {
          data: { token }
        } = await Axios.post(
          "http://kulinerin.pagekite.me/user/login",
          this.state.userData
        );
        localStorage.setItem("Token", token);
        this.props.history.push("/");
      } catch (e) {
        console.log(e.response.data.message);
        this.setState({ error: false });
      }
    } else {
      this.setState({ status: true });
    }
  };

  // callAPI() {
  //   fetch("http://kulinerin.pagekite.me/")
  //     .then(res => res.text())
  //     .then(res => this.setState({ apiResponse: res }));
  // }
  // componentWillMount() {
  //   this.callAPI();
  // }

  render() {
    return (
      <div className="BG">
        <div className="center-view">
          <div className="card-auth">
            <div className="title">{"Login"}</div>
            <div className="content">
              <InputIcon
                iconType="user"
                placeholder="username"
                id="username"
                onTyping={data => {
                  this.handler(data);
                }}
              />
              <InputIcon
                iconType="mail"
                placeholder="email"
                id="email"
                onTyping={data => {
                  this.handler(data);
                }}
              />
              <InputIcon
                iconType="lock"
                placeholder="password"
                id="password"
                onTyping={data => {
                  this.handler(data);
                }}
              />
            </div>
            <div className="action">
              <Button
                type="primary"
                text={"Login"}
                onSend = {this.props.diTekan}
              />
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
