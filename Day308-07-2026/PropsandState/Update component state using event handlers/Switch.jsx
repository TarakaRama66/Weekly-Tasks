import { useState } from "react";
function Switch(){
    const [status, setStatus] = useState("OFF");
    const turnOn=()=>{setStatus("ON");
    };
    const turnOff=()=>{setStatus("OFF");
    };
    return(
        <>
        <h1>Update component state using event handlers</h1>
        <h2>Light Status: {status}</h2>
        <button onClick={turnOn}>Turn ON</button><br></br>

        <button onClick={turnOff}>Turn OFF</button>
        </>
    )
}
export default Switch;