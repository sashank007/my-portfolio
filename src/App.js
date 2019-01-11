import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import MySections from "./MySections/MySections";
import Jumbotron from "./Jumbotron/Jumbotron";
import PokemonIntro from "./PokemonIntro/PokemonIntro";
import PokemonStadium from "./PokemonStadium/PokemonStadium";
import PokemonAttacks from "./PokemonAttacks/PokemonAttacks";
import PokemonRegion from "./PokemonRegion/PokemonRegion";
import Pokemon from "./Pokemon/Pokemon";
import SasGym from "./SasGym/SasGym";
class App extends Component {
  render() {
    return (
      <div className="App">
        <PokemonRegion /> {/* <SasGym /> */} {/* <Pokemon /> */}{" "}
        {/* <Pokemon /> */} {/* <PokemonAttacks /> */} {/* <PokemonIntro /> */}{" "}
        {/* <PokemonStadium /> */} {/* <MySections /> */}{" "}
      </div>
    );
  }
}

export default App;
