import React, {useState, useEffect} from "react";
import './Header.css'

    function Header(){
        const [userInput, setUserInput] = useState("")
        const [data, setData] = useState(null)
        const [newerror, setNewError] = useState(null)
        const apiurl = `https://pokeapi.co/api/v2/pokemon/${userInput}`

        function HandleInputChange(e){
            setUserInput(e.target.value)
        }

        const handleSubmit = (e) => {
            e.preventDefault();
            setUserInput("")
            };


            // useEffect(() => {
            //     const fetchData = async () => {
            //     try {
            //         if(!userInput) return;
            //         const response = await fetch(apiurl);
            //         if(!response.ok){
            //             throw new Error("Failed to Reach API")
            //             }
            //         const jsonData = await response.json();
            //         setData(jsonData);
                    
            //         } catch (error) {
            //         setNewError(console.error("Something went bad", newerror));
            //         }
            //     }
            //     fetchData();
            //     }, [data]);
                const fetchData = async () => {
                       const response = await fetch(apiurl);
                       if(!response.ok){
                        throw new Error ("Failed to fetch Data")
                       }
                       const ResData = await response.json();
                       console.log(ResData)

                       console.error("Error fetching data:", newerror);
                       alert("The entered Pokémon doesn't exist.");
                       setNewError("Error fetching data: " + newerror.message);  
                     }
                             
    return(
    <>

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