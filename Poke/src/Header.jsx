import React, {useState, useEffect} from "react";
import './header.css'

function Header(){
    const [userinput, setUserInput] = useState("")
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted with value:", userinput);
        setUserInput("")
      };


         useEffect(() => {
        const fetchData = async () => {
          try {
            if(!userinput) return;
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${userinput}`);
            console.log(response)
            if(!response.ok){
              throw new Error("Failed to Reach API")
            }
            const jsonData = await response.json();
            setData(jsonData);
          } catch (error) {
            setError(console.error("Something went bad", error));
          }
        }
      
        fetchData();
      }, [userinput]);
      
    function remove(){ 
     
}

    function randomPoke(){
        
    }

    return(
    <>
    <div className="container">
        <form onSubmit={handleSubmit}>

            <h1 className="heading-text">PokeMon</h1>

            <input id="in" onChange={(e) => setUserInput(e.target.value)}
             value={userinput}
             type="text"
             placeholder="Choose Your Pokemon!"></input>
            <br></br>

            <button onClick={randomPoke}>Randomize</button>

        </form>
    </div>
        
        
    </>)
}

export default Header