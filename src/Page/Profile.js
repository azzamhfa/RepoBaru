import React, { Component } from "react";
import NavBar from "../NavBar.js";
import Promosi from "../Promosi Content/Promosi.js";
import Content from "../Content.js";
import CardBoard from "../CardBox/CardBoard.js";
import { Row } from "react-bootstrap";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <NavBar />
        <Content>
          <div>
            <img
              src={
                "https://b.zmtcdn.com/images/foodshots/cover/pizza3.jpg?output-format=webp"
              }
              style={{ marginTop: "40px"}}
            ></img>
          </div>
          <Promosi></Promosi>
        </Content>
      </div>
    );
  }
}

export default Profile;
