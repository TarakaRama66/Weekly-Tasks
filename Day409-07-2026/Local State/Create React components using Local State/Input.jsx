import { useState } from "react";
function Input(){
    const[name, setName] = useState("");
    return(
        <div>
            <h1>Create React components using Local State</h1>
            <input
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}/>

            <h3>Hello, {name}</h3>
        </div>
    )
}
export default Input;