import React from "react";
import data from "./Header.jsx";
 export async function fetchData(userInput) {
    const apiurl = `https://pokeapi.co/api/v2/pokemon/${userInput}`;
    try {
        const response = await fetch(apiurl);
        if (!response.ok) {
            throw new Error("Failed to fetch Data");
        }
        
        const ResData = await response.json();
        return ResData;
    } catch (error) {
        throw new Error("Error fetching data: " + error.message);
    }
}

function PokemonDetails() {
   const PokeDet = data

    return (
        <>
        <div>
            <h1>{PokeDet.name}</h1>
            
            <h1></h1>
        </div>
        <><h1>Hello Poke</h1></>
        </>
    );
}

export default PokemonDetails;
