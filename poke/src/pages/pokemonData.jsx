import React from "react";
import { useLocation } from "react-router-dom";

function PokemonData() {
    const location = useLocation();
    const pokedata = location.state ? location.state.pokedata : null;
    console.log(location.state.pokedata)
    const Playaudio = () => { 
        if(pokedata){
        new Audio(`https://raw.githubusercontent.com/PokeAPI/cries/main/cries/pokemon/latest/${pokedata.id}.ogg`).play()
        }
    }

    return (
        <div>
            <h1>Pokemon Data</h1>
            {pokedata && (
                <div>
                    <h2>Name: {pokedata.name}</h2>
                    <p>Poke#: {pokedata.id}</p>
                    <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokedata.id}.png`} alt="Pokemon Image"/>
                    <p>Height: {pokedata.height}</p>
                    <p>Weight: {pokedata.weight}</p>
                    <button onClick={Playaudio}>PokeMon Cry </button> 
                    <p>Where ya can find em : {pokedata.location_area_encounters}</p>

                    
                </div>
            )}
        </div>
    );
}

export default PokemonData;
