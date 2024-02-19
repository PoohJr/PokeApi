import React, {useState} from 'react';
React
function newUpdate(){

    const [cars, setCar] = useState({year: 2009, make: "Chev", model: "Colbalot"})

        function changecarYear(e){
            setCar(c => ({...c, year: e.target.value}))
        }
        function changecarMake(e){
            setCar(c => ({...c, make: e.target.value}))
        }
        function changeCarModel(e){
            setCar(c => ({...c, mode: e.target.value}))
        }
    

    return(
        <div className="container">
            <h1>My Car is: {cars.year}, {cars.make}, {cars.model}</h1>
            <br/>
            <input type='number' value={cars.year} onChange={changecarYear}></input>
            <input type='text' value={cars.make} onChange={changecarMake}></input>
            <input type='text' value={cars.model} onChange={changeCarModel}></input>
        </div>
    );
}


//updater functions 
// use state
// objects

export default newUpdate































































































