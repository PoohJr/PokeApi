// Details page component
import React from "react";

function PokemonDetails({ location }) {
    const pokemonData = location.state.pokemonData;

    return (
        <div>
            <h1>{pokemonData.name}</h1>
            {/* Display other details of the Pokémon */}
        </div>
    );
}

export default PokemonDetails;
