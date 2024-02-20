import React, { useState } from 'react'

function newUpdate(){

    const [cars, setCars] = useState({year: 2009, make: "Chev", model: "coboalt"});

    function setChangeYear(e){
        setCars( c=> ({...c, year: e.target.value}))
    }

    function setChangeMake(e){
        setCars( c=> ({...c, make: e.target.value}))
    }

    function setChangeModel(e){
        setCars( c=> ({...c, model: e.target.value}))
    }


    return(<>
        <div className="container">
            <h1> My Car is: {cars.year}, {cars.make}, {cars.model}</h1>
            <br></br>
            <input type='number' value={cars.year} onChange={setChangeYear}/>
            <input type='text' value={cars.make} onChange={setChangeMake}/>
            <input type='text' value={cars.model} onChange={setChangeModel}/>
        </div>
    </>);

}

//updater functions 
// use state
// objects

export default newUpdate































































































