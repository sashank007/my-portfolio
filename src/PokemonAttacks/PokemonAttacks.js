import React, { Component } from "react";
import PokemonStadium from "../PokemonStadium/PokemonStadium";
import Typist from "react-typist";
import "./PokemonAttacks.css";
// const themeClass = theme ? theme.toLowerCase() : "secondary";
export default class PokemonAttacks extends Component {
  render() {
    return (
      <div>
        <ul className="attackList">
          <li style={{ float: "left" }}>About Me</li>
          <br />
          <li>Work Experience</li>
          <li>Projects</li>
          <li>Contact Me</li>
        </ul>
      </div>
    );
  }
}
