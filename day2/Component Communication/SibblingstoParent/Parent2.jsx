import {useState} from "react"
import Input from "./Input";
import Display from "./Display";

function Parent2(){
    const[message, setMessage] = useState("");
    return(
        <div>
            <Input setMessage={setMessage}/>
            <Display message={message}/>
        </div>
    )
}
export default Parent2;