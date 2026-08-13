import { useState } from "react";

function useMembers(){
    const[ members, setMembers] = useState([
        {id:1, name:"Tarak", plan:"Gold"},
        {id:2, name:"Ram", plan:"Silver"},
        {id:3, name:"Tilak", plan:"Platinum"},
        {id:4, name:"Gupta", plan:"Gold"},
    ]);

    return{
        members,setMembers,
    };
}
export default useMembers