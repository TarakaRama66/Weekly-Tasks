import { useState } from "react";
import CountChild from "./CountChild";
function CountParent(){
    const[count, setCount] = useState(0);
    const increaseCount = ()=>{setCount(count+1);
    };
    return(
        <>
        <h1>Update the Parent component's State based on Child interactions</h1>
        <h1>Parent Component</h1>
        <h2>Total Clcks: {count}</h2>
        <CountChild Increase={increaseCount}/>
        </>
    )
}
export default CountParent;
