import { useState } from "react";
function Employeeps({name,role}){
    const [status, setStatus]= useState("Available");

    const changeStatus = ()=> {
        setStatus("In Meeting");
    };
    return(
        <>
        <h1>Create components that use both Props and State</h1>
        <h2>Employee Details</h2>
        <p>Name: {name}</p>
        <p>Role: {role}</p>
        <p>Status: {status}</p>

        <button onClick={changeStatus}>Update Status</button>
        </>
    )
}
export default Employeeps;