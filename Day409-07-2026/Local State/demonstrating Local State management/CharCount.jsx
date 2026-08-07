import { useState } from "react";
function CharCount(){
    const [text, setText] = useState("");
    return(
        <div>
            <h1>demonstrating Local State management</h1>
            <textarea
            rows={4}
            cols={20}
            value={text}
            onChange={(e)=> setText(e.target.value)}/>

            <h3>Characters: {text.length}</h3>
        </div>
    )
}
export default CharCount;