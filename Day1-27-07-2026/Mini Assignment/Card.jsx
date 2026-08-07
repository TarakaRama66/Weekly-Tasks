import React from "react";

function Card({ employee }) {
  console.log("Employee Card Rendered:", employee.name);

  return (
    <div
      style={{
        border: "1px solid gray",
        margin: "10px",
        padding: "10px",
        borderRadius: "8px",
      }}>
      <h3>{employee.name}</h3>
      <p><strong>Email:</strong> {employee.email}</p>
      <p><strong>Phone:</strong> {employee.phone}</p>
      <p><strong>Company:</strong> {employee.company.name}</p>
    </div>
  );
}
// Prevent unnecessary re-render
export default React.memo(Card);