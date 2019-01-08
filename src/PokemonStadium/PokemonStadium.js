import React, { Component } from "react";
import "./PokemonStadium.css";
import Typist from "react-typist";
import LinearProgress from "@material-ui/core/LinearProgress";
// const themeClass = theme ? theme.toLowerCase() : "secondary";

export default class PokemonStadium extends Component {
  render() {
    return (
      <div>
        <section className="stadium">
          {/* @TODO:Interrogate , a wild sashank appeared */}
          <section className="sashank">
            <img
              src="https://66.media.tumblr.com/ddd22fe10a485ed56a46d958c058a970/tumblr_n9lnpepqkW1scncwdo1_500.gif"
              alt="me"
            />
            <div className="myHP">
              <h2>Sashank</h2>
              <div className="pbMe">
                <LinearProgress variant="determinate" value={100} />
              </div>
            </div>
          </section>

          <section className="hero">
            <img
              src="http://vignette4.wikia.nocookie.net/pokemon/images/5/5b/Pikachu_Back_XY.gif/revision/latest?cb=20141009080948"
              alt="pikachu"
            />
            <div className="enemyHP">
              <h2>Pikachu</h2>
              <div className="pbEnemy">
                <LinearProgress variant="determinate" value={100} />
              </div>
            </div>
          </section>
        </section>
      </div>
    );
  }
}
