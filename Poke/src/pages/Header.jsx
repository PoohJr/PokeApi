import React, {useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import './Header.css'



    function Header(){
        const [userInput, setUserInput] = useState("")
        const [pokedata, setpokeData]= useState(null)
        const [newerror, setNewError] = useState(null)
        const navigate = useNavigate()
        

       useEffect(() => {
            async function fetchData(userInput) {
                const apiurl = `https://pokeapi.co/api/v2/pokemon/${userInput}`;
                try {
                    const response = await fetch(apiurl);
                    if (!response.ok) {
                        throw new Error("Failed to fetch Data");
                    }
                    const resData = await response.json();
                    setpokeData(resData)
                    console.log(resData) 
                } catch (error) {
                    console.error("Error Fetching Api", error);
                        // navigate('404')
                     setNewError("Error fetching data: " + error.message);
                }
            }

        }, []);

        
        
        const handleSubmit = async (e) => {
            e.preventDefault();
                setUserInput("")
                navigate('PokeMon');
            };
            


        function HandleInputChange(e){
            setUserInput(e.target.value)
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

                <button href="./PokemonDet.jsx" className="search">Search</button>
                <br></br> 
                <button className="random">Randomize</button> 
         </div>
        </form>
     </div>

    </>)
    }
export default Header