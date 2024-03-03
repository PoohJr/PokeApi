import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
export async function fetchData(userInput) {
    
    const apiurl = `https://pokeapi.co/api/v2/pokemon/${userInput}`;
    try {
        const response = await fetch(apiurl);
        if (!response.ok) {
            throw new Error("Failed to fetch Data");
        }
        
        const ResData = await response.json();
        console.log(ResData);
        return ResData;
    } catch (error) {
        throw new Error("Error fetching data: " + error.message);
    }
}



function PokemonDetails() {
    const location = useLocation()
    const{userInput} = location.state

    const [pokedata, setPokeData] = (null)
    
    
    useEffect(() =>{
        async function UpdateDom(userInput){
            try{
                const data = fetchData(userInput)
                    setPokeData(data);
            }   catch(error){
                console.error(error)
            }
        }
            UpdateDom(userInput)
    },[userInput])
    

    

    return (
        <>
            <h1>{pokedata && pokedata.name}</h1>
            <h1>Hello</h1>
        </>
    );
}

export default PokemonDetails;
