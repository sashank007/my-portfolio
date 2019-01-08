import React, {
  Component
} from "react";
import PokemonStadium from "../PokemonStadium/PokemonStadium";
import PokemonAttacks from "../PokemonAttacks/PokemonAttacks";
import Typist from "react-typist";
// const themeClass = theme ? theme.toLowerCase() : "secondary";
export default class Pokemon extends Component {
  render() {
    return ( <
      div >
      <
      PokemonStadium / >
      <
      PokemonAttacks / >
      <
      /div>
    );
  }
}