import { useState } from "react";
function Counter(){
    const [count, setCount] = useState(0);
    return(
        <div>
            <br></br>
            <h1>Update UI using state</h1>
            <h2>Count: {count}</h2>
            <button onClick={()=> setCount(count + 1)}>Increment</button>
        </div>
    )
}
export default Counter;