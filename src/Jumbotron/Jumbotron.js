import React, { Component } from "react";
import "./Jumbotron.css";
import Typist from "react-typist";
// const themeClass = theme ? theme.toLowerCase() : "secondary";
import SashankPoke from "../assets/images/saisashanktungaturthi_poke.png";
export default class Jumbotron extends Component {
  render() {
    return (
      <div style={{ height: "40vh" }}>
        <div class="jumbotron" id="#jumbo">
          <div class="container">
            {" "}
            {/* <h2 class="display">Sai</h2>
                    <h2 class="display">Sashank</h2>
                    <h2 class="display">Tungaturthi</h2> */}{" "}
            <img
              src={SashankPoke}
              style={{ float: "center" }}
              width={1000}
              height={50}
              alt="myname"
            />{" "}
            {/* <p class="lead">Hi! Welcome to Sashank-World!</p> */}{" "}
          </div>
          <Typist>
            <span className="Welcome">
              {" "}
              Hi! Welcome to the Saso Region of Pokemon! Move around to check
              out this region!
            </span>
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
