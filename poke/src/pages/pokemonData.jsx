import React from "react";
import { useLocation } from "react-router-dom";

function PokemonData() {
    const location = useLocation();
    const pokedata = location.state ? location.state.pokedata : null;
    console.log(location.state.pokedata)
    return (
        <div>
            <h1>Pokemon Data</h1>
            {pokedata && (
                <div>
                    <h2>Name: {pokedata.name}</h2>
                    <p>Height: {pokedata.height}</p>
                    <p>Weight: {pokedata.weight}</p>
                    
                </div>
            )}
        </div>
    );
}

export default PokemonData;
