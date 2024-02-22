// useEffect basically tells react what to do when i pick one
// This component Renders
// This componet Mounts or when you create a appended to the DOM
//The State of a value changes

// this guy said think of it like side code 
//useEffect(function, [dependencies])  *wriet the code in the function
//could be an array function, for the second option,
// you can write some dependencies

// 1. useEffect(() => {})  //Runs after every re-render
// 2. useEffect(() => {}, [])  // Runs Only on mount
// 3. useEffect (() => {}, [value]) // Runs on mount + when value changes

// Uses
// #1 Event Listeners
// #2 DOM manipulation
// #3 Subs (real-time Update)
// #4 Fetching Data from API
// #5 Clean up when a component unmounts or when you remove a component from the DOM


import React, {useState, useEffect} from "react";

    function massEffect(){

        const [count, setCount] = useState(0)
        const [color, setColor] = useState("Green")

        useEffect(() =>{
            document.title = `"Count" ${count} ${color}`
        }, [count, color])

        function addCount(){

            setCount(c =>c + 1)
            
        }

        function minusCount(){

            setCount(c =>c - 1)
            
        }

        function changeColor(){
            setColor(c => c === "green" ? "red" : "green")
        }
        
        return(<>
            <p style={{color : color}}>Count {count}</p>
            <button onClick={addCount}>Add</button>
            <button onClick={minusCount}>Subtract</button> <br></br>
            <button onClick={changeColor}>Change Color</button>
        
        </>);
    }

export default massEffect

// useEffect(() =>{
//     document.title = `"Count" ${count}`
// }, [count])

// What this is saying is if the Value in the array i chnaged then 
//it could run wahts in the funcgtion
// yes it works without it, but it more specific
// it will run for whatever reason the componet re renders so and a value in the array

// useEffect(() =>{
//     document.title = `"Count" ${count}`
// })

 //  document.title = `"Count" ${count}` this would change the title on the site everytime its pressed


    //document.title = `"Count" ${count}` if you only wanna update things once
    //you put an empty array after the blue {}[] 

    // useEffect(() =>{
    //     document.title = "Count"
    // }, [])