import { useState } from "react";
import Child from "./ChildComponent";
function ParentComponent(){
    const [message, setMessage] = useState("");
    const receiveData = (data) =>{setMessage(data)};
    return(
        <>
        <h1>Pass data from Child to Parent using callback functions</h1>
        <h1>Parent Component</h1>
        <p>Message from child {message}</p>
        <Child sendData={receiveData}/>
        </>
    )
}
export default ParentComponent;