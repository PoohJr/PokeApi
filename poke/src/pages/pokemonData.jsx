import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import  handleSubmit  from './Header.jsx'
import Header from "./Header";
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


    

    return (
        <>
            {}
            <h1>PokeData</h1>
        </>
    );
}

export default PokemonDetails;
