import React, {useState} from 'react'

function Counter(){

    const [count, setCount] = useState(0);

        const addCount = () => {
            setCount(count + 1)
        }


    const [reset, setReset] = useState(0)

 




    return(
            <h1>Hello</h1>
    );

}

export default Counter