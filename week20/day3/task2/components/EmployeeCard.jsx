import { memo } from "react";

const EmployeeCard = memo(function EmployeeCard({ employee }) {
  console.log("EmployeeCard rendered");

  return (
    <div>
      <h3>{employee.name}</h3>
      <p>Role: {employee.role}</p>
      <p>Department: {employee.department}</p>
    </div>
  );
});

export default EmployeeCard;