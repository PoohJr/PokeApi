import React, {useState, } from "react";
import {useHistory} from 'react-router-dom'
import './Header.css'

    function Header(){
        const [userInput, setUserInput] = useState("")
        const [data, setData] = useState()
        const [newerror, setNewError] = useState(null)
        const apiurl = `https://pokeapi.co/api/v2/pokemon/${userInput}`
        const history = useHistory();


        function HandleInputChange(e){
            setUserInput(e.target.value)
        }

        const handleSubmit = (e) => {
            e.preventDefault();
            setUserInput("")
            };


                const fetchData = async () => {
                       const response = await fetch(apiurl);
                       if(!response.ok){
                        throw new Error ("Failed to fetch Data")
                        history.
                       }
                       const ResData = await response.json();
                       setData(ResData)
                       console.log(ResData)
                         history.push(`/pokemon/${ResData.name}`, { pokemonData: ResData });

                       console.error("Error fetching data:", error);
                       alert("The entered Pokémon doesn't exist.");
                       setNewError("Error fetching data: " + error.message);  
                     }
                             
    return(
    <>
            {newerror && <div className="error">{newerror}</div>}
    <div className="container"> 
        <form onSubmit={handleSubmit}> 
        <div className="display">
            <h1 className="heading-text">PokeMon</h1> 
                <input id="in" 
                onChange={HandleInputChange} 
                value={userInput} type="text" 
                placeholder="Choose Your Pokemon!"
                ></input> 
                <button className="search" onClick={fetchData}>Search</button>
                <br></br> 
                <button className="random">Randomize</button> 
         </div>
        </form>
     </div>

    </>)
    }
export default Header