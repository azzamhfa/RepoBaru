import React, { Component } from "react";
import "./CardBoard.scss";
class CardBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      namaResto: "",
      alamatResto: "",
      jenisResto: "",
      ratingResto: ""
    };
  }

  handler() {
    this.setState({namaResto: ""});
    this.setState({alamatResto: ""});
    this.setState({jenisResto: ""});
    this.setState({ratingResto: ""});
  }

  render() {
    return (
      <div className="Cardboard">
        <div className="Gambar">
          <img src={this.props.url}></img>
        </div>
        <div className="Deskripsi">
          <p>{this.props.teks}</p>
          <p>{this.props.teks}</p>
          <p>{this.props.teks}</p>
          <p>{this.props.teks}</p>
        </div>
        <br></br>
      </div>
    );
  }
}

export default CardBoard;
