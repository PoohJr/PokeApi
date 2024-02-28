import React, {useState, useEffect} from "react";
import './header.css'

function Header(){
    const [userinput, setUserInput] = useState("")
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)


    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form submitted with value:", userinput);
        setUserInput("")
      };

        function handleuserInput(e){
            setUserInput(e.target.value)
            console.log(userinput)
            
        }


   const getPoke = useEffect(() => {
        const apiurl = async () => {
          try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${setUserInput}`);
            const jsonData = await response.json();
            setData(jsonData);
          } catch (error) {

            setError(console.error("Something went bad", error));
          }
        }
      
        apiurl();
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

            <input id="in" onChange={handleuserInput}
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