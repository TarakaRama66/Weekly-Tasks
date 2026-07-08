import Student from "./Student";
function StudentDetails(){
    return(
        <div>
            <br></br>
            <h1>Pass Data From Parent to Child</h1>
            <Student name="Gupta"
            age ={23}
            city = "Palakollu"/>
        </div>
    );
}
export default StudentDetails;