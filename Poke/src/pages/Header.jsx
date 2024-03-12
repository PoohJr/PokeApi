import React, {useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from 'axios';
import './Header.css'



    export function Header(){
        const [userInput, setUserInput] = useState("")
        const [pokedata, setpokeData]= useState()
        const [newerror, setNewError] = useState()
        const navigate = useNavigate()
        const ref = useRef(mf)

    //     const inputRef = useRef(null)
        
    //    const mf =  useEffect(() => {
    //         async function fetchData(userInput) {
    //             const apiurl = `https://pokeapi.co/api/v2/pokemon/${userInput}`;
    //             try {
    //                 const response = await axios(apiurl);
    //                 if (response.status >= 200 && response.status < 300) {
    //                     setpokeData(response.data);
    //                     console.log(response.data);
    //                 } else {
    //                     throw new Error("Failed to fetch Data");
    //                 }
    //             } catch (error) {
    //                 console.error("Error Fetching Api", error);
    //                 // navigate('404')
    //                 setNewError("Error fetching data: " + error.message);
    //             }
    //         }
    //         fetchData(userInput);
    //     }, [userInput]);
        

        
        
        const  handleSubmit = (e) => {
            e.preventDefault();
             async function fetchData() {
               const apiUrl = fetch(`https://pokeapi.co/api/v2/pokemon/${userInput}`);
               try{
               const res = await axios(apiUrl)
               data = setpokeData(data)
                                else {
                                    throw new Error("Failed to fetch Data");
                                }
                            
                            } catch (error) {
                                console.error("Error Fetching Api", error);
                                
                                setNewError("Error fetching data: " + error.message);
                            }
                        }
                        
               
        }
            
            
                setUserInput("")
                // navigate('PokeMon');
            };
            


        function HandleInputChange(e){
            setUserInput(e.target.value)
        }



            
                             
    return(
    <>
           
    <div className="container"> 
     
        <form> 
        <div className="display">
            <h1 className="heading-text">PokeMon</h1> 

                <input id="in" 
                onChange={HandleInputChange} 
                value={userInput} type="text" 
                placeholder="Choose Your Pokemon!"
                ></input> 

                <button href="./PokemonDet.jsx"
                 className="search"
                 onClick={handleSubmit}>
                    Search
                </button>
                <br></br> 
                <button className="random">Randomize</button> 
         </div>
        </form>
     </div>

    </>)
    
export default Header