import React, {useState} from 'react'

function MyCom(){

    const [name, setName] = useState();

    const updateName = () => {
        setName = ("Will")
    }

    return(
        <div>
            <p>Name: {name}</p>
            <button className='btn1' onClick={updateName}></button>
        </div>

    );

}

export default MyCom