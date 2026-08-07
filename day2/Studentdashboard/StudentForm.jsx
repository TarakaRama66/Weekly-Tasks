import {useState} from "react";
function StudentForm({addStudent}){
    const [name,setName]=useState("");
    const submitHandler=(e)=>{e.preventDefault();
        if(name==="") return;
        addStudent({id:Date.now(),name,attendance:false});
        setName("");
    }
    return(
    <form onSubmit={submitHandler}>
        <input
        type="text"
        value={name}
        placeholder="Student Name"
        onChange={(e)=>setName(e.target.value)}/>
        <button>Add Student</button>
        </form>
    )
}
export default StudentForm;