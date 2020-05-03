import React, { Component } from "react";
import PokemonCard from "./PokemonCard";
import data from "./pokemon.json";
import axios from "axios";

import mainpagespinner from "../pokemon/mainpagespinner.gif";

export default class PokemonList extends Component {
  state = {
    url: "https://pokeapi.co/api/v2/pokemon?limit=151",
    pokemon: null
  };

  async componentDidMount() {
    const res = await axios.get(this.state.url);
    this.setState({ pokemon: res.data["results"] });
    // this.setState({ pokemon: data }); json file method but it sucks
  }
  render() {
    return (
      <React.Fragment>
        {this.state.pokemon ? ( // if pokemon is null return h1 if not null return pokemoncard
          <div className="row">
            {this.state.pokemon.map(pokemon => (
              <PokemonCard
                key={pokemon.name}
                name={pokemon.name}
                url={pokemon.url}
              />
            ))}
          </div>
        ) : (
          <img
            src={mainpagespinner}
            style={{ width: "20em", height: "20em" }}
            className="card-img-top rounded mx-auto d-block mt-2"
          ></img>
        )}
      </React.Fragment>
    );
  }
}
