import React, {useState, useEffect} from "react";
import './header.css'

function Header(){

    const [data, setData] = useState(null)
    const [error, setError] = useState(null)


    useEffect(() =>{

    },[])
    const pokeitem = document.getElementById("in").value
    const apiurl =  fetch(`https://pokeapi.co/api/v2/pokemon/${pokeitem}`);

    function getPoke (){ 
        
       
        
        console.log("Hello")
}



    function randomPoke(){
        
    }

    return(
    <>
    <div className="container">
        <h1 className="heading-text">PokeMon</h1>
        <input id="in" onSubmit={getPoke} type="sumbit" placeholder="Choose Your Pokemon!"></input>
        <br></br>
        <button onClick={randomPoke}>Randomize</button>
        
    </div>
        
        
    </>)
}

export default Header