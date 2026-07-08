import { useState } from "react";
function ProductChild({name,price}){
    const [quantity, setQuantity]=useState(1);
    return(
        <>
        <h1>Render dynamic data using Props and State</h1>
        <h2>Product Details</h2>
        <p>Product Name: {name}</p>
        <p>Price: {price}</p>
        <p>Quantity: {quantity}</p>
        <button onClick={()=> setQuantity(quantity+1)}>Add Quantity</button>
        </>
    )
}
export default ProductChild;