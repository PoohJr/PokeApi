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
            console.log("Form submitted with value:", userInput);
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
                       if(!response){
                        return setNewError(console.error(newerror, "No Good Play Boi"))
                       }
                       const ResData = await response.json();
                       console.log(ResData)

                }
    return(
    <>

    <div className="container"> 
        <form onSubmit={handleSubmit}> 
            <h1 className="heading-text">PokeMon</h1> 
                <input id="in" 
                onChange={HandleInputChange} 
                value={userInput} type="text" 
                placeholder="Choose Your Pokemon!"
                ></input> <button onClick={fetchData}>Search</button>
                <br></br> 
                <button>Randomize</button> 
        </form>
     </div>

    </>)
    }
export default Header