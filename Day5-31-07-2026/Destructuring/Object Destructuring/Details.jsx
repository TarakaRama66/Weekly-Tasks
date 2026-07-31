function Details() {
  const employee = {
    id: 1466,
    name: "Tarak",
    department: "IT",
    salary: 30000,
  };
  const { id, name, department, salary } = employee;
  return (
    <>
    <h2>Object Destructuring</h2>
      <h2>Employee Details</h2>
      <p>ID:{id}</p>
      <p>Name:{name}</p>
      <p>Department:{department}</p>
      <p>Salary:{salary}</p>
    </>
  );
}
export default Details;