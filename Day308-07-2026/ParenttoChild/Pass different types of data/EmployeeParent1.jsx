import EmployeeChild from "./EmployeeChild";
function EmployeeParent1(){
    const employeeName = "Tilak";

    const skills = ["HTML, CSS, JAVASCRIPT, REACT"];

    const employee={
        id : 466,
        department:"FullStack",
        experience:"3 years",
    };
    return(
        <>
        <EmployeeChild
        name={employeeName}
        skills={skills}
        employee={employee}/>
        </>
    )
}
export default EmployeeParent1;