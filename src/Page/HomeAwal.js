import NavBar from "../NavBar";
import React, { Component } from "react";
import Promosi from "../Promosi Content/Promosi.js";
import Content from "../Content";
import Footer from "../Footer";
import BawahHeader from "../Promosi Content/BawahHeader.js";
import Cardboard from "../CardBox/CardBoard.js";
import Button from "../component/Button.js"
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <NavBar>
          <Button
            type="login"
            text="LOGIN"
            onClick={() => {
              window.location.href = "/login";
            }}
          />
          <Button
            type="secondary "
            text="DAFTAR"
            onClick={() => {
              window.location.href = "/register";
            }}
          />
        </NavBar>
        <BawahHeader />
        <Content>
          <h2> REKOMENDASI KITA</h2>
          <Promosi>
            <Cardboard
              teks="Testing Menu"
              url="https://b.zmtcdn.com/images/foodshots/cover/pizza3.jpg?output-format=webp"
            />
            <Cardboard
              teks="Testing Menu"
              url="https://b.zmtcdn.com/images/foodshots/cover/pizza3.jpg?output-format=webp"
            />
            <Cardboard
              teks="Testing Menu"
              url="https://b.zmtcdn.com/images/foodshots/cover/pizza3.jpg?output-format=webp"
            />
            <Cardboard
              teks="Testing Menu  "
              url="https://b.zmtcdn.com/images/foodshots/cover/pizza3.jpg?output-format=webp"
            />
          </Promosi>
          <div className="TeksLain">
            <h2>REKOMENDASI KITA</h2>
            <h2>P</h2>
          </div>
          <h1>REKOMENDASI KITA</h1>
          <Promosi></Promosi>
        </Content>
        <Footer />
      </div>
    );
  }
}

export default Home;
