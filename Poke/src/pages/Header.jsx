import React, {useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchData } from "./pokemonData.jsx";
import './Header.css'



    function Header(){
        const [userInput, setUserInput] = useState("")
        const [newerror, setNewError] = useState(null)
        const navigate = useNavigate()
        



        function HandleInputChange(e){
            setUserInput(e.target.value)
        }

        const handleSubmit = async (e) => {
            e.preventDefault();
                try{
                    const data = await fetchData(userInput)
                    console.log(data)
                    navigate('PokeMon', { state: { pokemonData: data }});
                }   catch(error) {
                    console.error("Error Fetching Api", error);
                    navigate('404')
            setNewError("Error fetching data: " + error.message);
                }
            setUserInput("")
            };


            
                             
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

                <button href="./PokemonDet.jsx" className="search">Search</button>
                <br></br> 
                <button className="random">Randomize</button> 
         </div>
        </form>
     </div>

    </>)
    }
export default Header