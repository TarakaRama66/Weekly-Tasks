import EmployeeCard from "./EmployeeCard";

function EmployeeList({ employees }) {
  return (
    <>
      {employees.map((employee) => (
        <EmployeeCard
          key={employee.id}
          employee={employee}/>
      ))}
    </>
  );
}
export default EmployeeList;