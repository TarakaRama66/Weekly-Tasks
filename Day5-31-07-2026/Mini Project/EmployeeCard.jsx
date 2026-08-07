import React from "react";

function EmployeeCard({ employee }) {
  const { name, department, salary } = employee;
  return (
    <>
      <h3>{name}</h3>
      <p>{department}</p>
      <p>{salary}</p>
      <hr />
    </>
  );
}
export default React.memo(EmployeeCard);