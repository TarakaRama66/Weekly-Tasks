import EmployeeCardChild from "./EmployeeCardChild";
function EmployeeCardParent(){
    return(
        <>
        <h1>Reuse the same Child component with different Props</h1>
        <h1>Employee Details</h1>
        <EmployeeCardChild
        name = "Tarak"
        role="Frontend Developer"
        salary={40000}/>

        <EmployeeCardChild
        name="Tilak"
        role="Backend Developer"
        salary={50000}/>
        </>
    )
}
export default EmployeeCardParent;