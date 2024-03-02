import React from "react";
import fetchData from "./Header";
import './PokemonDet.css'
function PokemonDet() {
    

    return (
        <div>
            <div className="comp">
            {data && <h1>{data.name}</h1>}
            {data && <img src={data.sprites && data.sprites.back_default} alt="" />}
        </div>
            {() => fetchData()}
            <h1>{pokemonData.name}</h1>
            <h1>This is Poke</h1>
        </div>
    );
}

export default PokemonDet;
