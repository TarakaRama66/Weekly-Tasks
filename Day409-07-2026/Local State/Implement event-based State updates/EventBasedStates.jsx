import { useState } from "react";
function EventBasedStates(){
    const [count, setCount]= useState(0);
    const [name, setName] = useState("");
    const[isDark, setIsDark] = useState(false);

    // Click Event
    const Increment = ()=>{setCount(count+1)};
    //Change Event
    const NameChange = (e)=>{setName(e.target.value)};
    // Toggle Event
    const Theme = ()=>{setIsDark(!isDark)};

    return(
        <div style={{padding:"20px",backgroundColor:isDark?"Black":"White",color:isDark?"White":"Black"}}>
            <br></br>
            <h1>Event Based State Updates</h1>
            <h2>Count:{count}</h2>
            <button onClick={Increment}>Increment</button>
            <hr></hr>
            <h2>Enter Your Name</h2>
            <input
            type="text"
            value={name}
            onChange={NameChange}
            placeholder="Enter name"/>
            <p>Hello,{name}</p>
            <hr></hr>
            <h2>Theme</h2>
            <button onClick={Theme}>{isDark?"light mode":"Dark mode"}</button>
        </div>
    )
}
export default EventBasedStates;