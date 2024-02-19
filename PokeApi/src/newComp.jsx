import React, {useState} from 'react';

    function newComp(){

        const [name, setName] = useState("player 1");
        const [quantity, setQuantity] = useState(0);
        const [comment, setComment] = useState("");
        const [payment, setPayment] = useState("");
        const [shipping, setShipping] = useState("")


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

        function shippingChange(e){
            setShipping(e.target.value)
        }

    return(
        <div>
            <input value={name} onChange={handleClick} type="text" />
            <p>Name: {name}</p>

            <input value={quantity} onChange={handleQuantity} type="number" />
            <p>Quantity: {quantity}</p>
            
            <p>Comment: {comment}</p>
            <textarea value={comment} onChange={handleComment} placeholder="Let Extra introduction" type="text" /><br/>
            <br/>
            <select value={payment} onChange={handlePayment}>
                <option value="">Select an Option</option>
                <option value="Visa">Visa</option>
                <option value="MasterCard">MasterCard</option>
                <option value="Gift Card">Gift Card</option>  
            </select> 
            <p>Payment: {payment}</p>
            <br/>

            <label>
                <input type="radio" value="Pick Up" 
                checked={shipping === "Pick Up"} 
                onChange={shippingChange}/>
                Pick Up
            </label><br/>
            <label>
            <input type="radio" value="Delivery" 
                checked={shipping === "Delivery"} 
                onChange={shippingChange}/>
                Delivery
            </label>
            <p>Shipping: {shipping}</p>
        </div>);
    }


    export default newComp