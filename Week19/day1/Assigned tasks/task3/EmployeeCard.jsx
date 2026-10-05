function EmployeeCard() {
  const employee = {
    id: 101,
    name: "Taraka Ram",
    role: "Associate Software Engineer",
    department: "Frontend Development",
    experience: "1 year",
    location: "Hyderabad"
  };
  return (
    <div>
      <h2>Employee Details</h2>
      <p>ID : {employee.id}</p>
      <p>Name : {employee.name}</p>
      <p>Role : {employee.role}</p>
      <p>Department : {employee.department}</p>
      <p>Experience : {employee.experience}</p>
      <p>Location : {employee.location}</p>
      <hr></hr>
    </div>
  );
}
export default EmployeeCard;