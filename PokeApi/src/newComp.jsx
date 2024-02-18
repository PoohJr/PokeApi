import React, {useState} from "react";

    function newComp(){

        const [name, setName] = useState("player 1")
        const [quantity, setQuantity] = useState(0)
        const [comment, setComment] = useState("")
        const [payment, setPayment] = useState("")


        function handleClick(e){
            setName(e.target.value)
        }

        function handleQuantity(e){
            setQuantity(e.target.value)
        }

        function handleComment(e){
            setComment(e.target.value)
        }

        function handlePayment(e) {
            setPayment(e.target.value)
        }


    return(
        <div>
            <input value={name} onChange={handleClick} type="text" />
            <p>Name: {name}</p>

            <input value={quantity} onChange={handleQuantity} type="number" />
            <p>Quantity: {quantity}</p>
            
            <p>Comment:</p>
            <textarea value={comment} onChange={handleComment} placeholder="Let Extra introduction" type="text" />

            <select value={payment} onChange={setPayment}>
                <option value="">Select an Option</option>
                <option value="Visa">Visa</option>
                <option value="MasterCard">MasterCard</option>
                <option value="Gift Card">Gift Card</option>  
            </select> 
            <p>Payment: {payment}</p>
        </div>);
    }


    export default newComp