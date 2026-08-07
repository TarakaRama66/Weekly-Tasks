import { useState, useEffect } from "react";
function GetUsers(){
    const [users, setUsers] = useState([])
    useEffect(()=>{
        fetch( "https://jsonplaceholder.typicode.com/users")
        .then((response)=>response.json())
        .then((data)=>setUsers(data))
    },[]);
    return(
        <div>
            <h1>Perform GET requests and display data</h1>
            <h2>UserList</h2>
            {users.map((user)=>(
                <p key={user.id}>{user.name}</p>
            ))}
        </div>
    )
}
export default GetUsers;