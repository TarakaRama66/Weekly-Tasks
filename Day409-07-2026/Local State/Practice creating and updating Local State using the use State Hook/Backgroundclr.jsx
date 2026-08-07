import { useState } from "react";
function Backgroundclr(){
    const [color, setColor] = useState("orange")
    return(
        
        <div style={{backgroundColor: color, padding:"20px"}}>
            <h1>Practice creating and updating Local State using the use State Hook</h1>
            <button onClick={()=>setColor("Blue")}>Change Color</button>
        </div>
    )
}
export default Backgroundclr;