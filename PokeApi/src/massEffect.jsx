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

        useEffect(() =>{
            document.title = `"Count" ${count}`
            //  document.title = `"Count" ${count}` this would change the title on the site everytime its pressed
            //document.title = `"Count" ${count}` if you only wanna update things once
            //you put an empty array after the blue {}[] 
        })

        function addCount(){

            setCount(c =>c + 1)
            
        }

        return(<>
            <p>Count {count}</p>
            <button onClick={addCount}>Add</button>
        
        </>);
    }

export default massEffect