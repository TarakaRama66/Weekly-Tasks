function EmployeeChild({name, skills, employee}){
    return(
        <>
        <h1>Pass different types of data</h1>
        <h2>Employee Details</h2>
        <p>Name: {name}</p>
        <h3>Skills</h3>
        <ul>
            {skills.map((skills, index) =>(
                <li key={index}>{skills}</li>
            )
            )
            }
        </ul>
        <h3>Employee Information</h3>
        <p>ID: {employee.id}</p>
        <p>Department: {employee.department}</p>
        <p>Experience: {employee.experience}</p>
        </>
    )
}
export default EmployeeChild;