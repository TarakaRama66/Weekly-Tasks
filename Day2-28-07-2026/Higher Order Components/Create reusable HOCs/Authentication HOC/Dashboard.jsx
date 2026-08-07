function Dashboard({ employee }) {
  return (
    <>
      <h1>Employee Dashboard</h1>

      <h3>Employee Details</h3>

      <p>ID : {employee.id}</p>
      <p>Name : {employee.name}</p>
      <p>Department : {employee.department}</p>
      <p>Role : {employee.role}</p>
      <p>Salary : {employee.salary}</p>
    </>
  );
}

export default Dashboard;