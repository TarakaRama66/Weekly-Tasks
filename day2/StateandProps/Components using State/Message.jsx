import { useState } from "react";
function Message(){
    const [Show, setShow] = useState(true);
    return(
        <div>
            <br></br>
            <h1>Create components using State</h1>
            <button onClick={()=> setShow(!Show)}>Hide</button>
            {Show&& <h2>Show and Hide the Message</h2>};
        </div>
    )
}
export default Message;