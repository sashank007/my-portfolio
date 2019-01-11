import React, { Component } from "react";
import "./Jumbotron.css";
import Typist from "react-typist";
// const themeClass = theme ? theme.toLowerCase() : "secondary";
import SashankPoke from "../assets/images/saisashanktungaturthi_poke.png";
export default class Jumbotron extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: this.props.displayMessage
    };
  }
  componentDidUpdate(nextProps) {
    console.log("component did update", nextProps);
    if (this.state.message !== nextProps.displayMessage)
      this.setState({
        message: nextProps.displayMessage
      });
  }
  updateMessage(message) {
    return message;
  }
  render() {
    console.log(
      "props display message -----------------",
      this.props.displayMessage
    );

    return (
      <div
        style={{
          height: "45vh"
        }}
      >
        <div className="jumbotron" id="#jumbo">
          <div className="container">
            {" "}
            {/* <h2 class="display">Sai</h2>
                            <h2 class="display">Sashank</h2>
                            <h2 class="display">Tungaturthi</h2> */}{" "}
            <img
              src={SashankPoke}
              style={{
                float: "center"
              }}
              width={1000}
              height={50}
              alt="myname"
            />
          </div>{" "}
          {/* {this.state.message}{" "} */}
          <Typist>
            <span className="Welcome"> {this.state.message} </span>{" "}
            {/* <Typist.Delay ms={500} />
                            <div className="container">
                              Scroll down to get to know me better!
                            </div> */}{" "}
          </Typist>{" "}
        </div>{" "}
      </div>
    );
  }
}
