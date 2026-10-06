import EmployeeCard from "./EmployeeCard";
import { useState } from "react";
 
function Task3App() {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Taraka Ram",
      role: "Frontend Developer",
      rating: 8,
      salary: 50000,
    },
    {
      id: 2,
      name: "Rahul",
      role: "React Developer",
      rating: 7,
      salary: 45000,
    },
    {
      id: 3,
      name: "Kiran",
      role: "UI Developer",
      rating: 9,
      salary: 60000,
    },
  ]);
 
  const promoteEmployee = (id) => {
    setEmployees(
      employees.map((emp) =>
        emp.id === id
          ? { ...emp, role: "Senior Developer" }
          : emp
      )
    );
  };
 
  const giveBonus = (id) => {
    setEmployees(
      employees.map((emp) =>
        emp.id === id
          ? { ...emp, salary: emp.salary + 10000 }
          : emp
      )
    );
  };
 
  const increaseRating = (id) => {
    setEmployees(
      employees.map((emp) =>
        emp.id === id
          ? { ...emp, rating: emp.rating + 1 }
          : emp
      )
    );
  };
 
  const removeEmployee = (id) => {
    setEmployees(
      employees.filter((emp) => emp.id !== id)
    );
  };
 
  return (
    <div>
      <h1>Employee Performance Dashboard</h1>
 
      {employees.map((employee) => (
        <EmployeeCard
          key={employee.id}
          employee={employee}
          promoteEmployee={promoteEmployee}
          giveBonus={giveBonus}
          increaseRating={increaseRating}
          removeEmployee={removeEmployee}
        />
      ))}
    </div>
  );
}
 
export default Task3App;