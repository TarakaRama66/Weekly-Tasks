import { useState } from "react";
 
function Task5() {
  const [employeeName, setEmployeeName] =
    useState("");
 
  const [search, setSearch] =
    useState("");
 
  const [employees, setEmployees] =
    useState([
      {
        id: 101,
        name: "Ravi Kumar",
        department: "Developer",
      },
      {
        id: 102,
        name: "Priya Sharma",
        department: "HR",
      },
      {
        id: 103,
        name: "Arjun Reddy",
        department: "Manager",
      },
    ]);
 
  const addEmployee = () => {
    if (!employeeName.trim()) return;
 
    const newEmployee = {
      id: Date.now(),
      name: employeeName,
      department: "Employee",
    };
 
    setEmployees([
      ...employees,
      newEmployee,
    ]);
 
    setEmployeeName("");
  };
 
  const deleteEmployee = (id) => {
    setEmployees(
      employees.filter(
        (emp) => emp.id !== id
      )
    );
  };
 
  const filteredEmployees =
    employees.filter((emp) =>
      emp.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );
 
  return (
    <div className="container">
      <h1>
        Employee Management System
      </h1>
 
      <div className="top-section">
        <input
          type="text"
          placeholder="Employee Name"
          value={employeeName}
          onChange={(e) =>
            setEmployeeName(
              e.target.value
            )
          }
        />
 
        <button onClick={addEmployee}>
          Add Employee
        </button>
      </div>
 
      <input
        type="text"
        placeholder="Search Employee"
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />
 
      <div className="employee-list">
        {filteredEmployees.length >
        0 ? (
          filteredEmployees.map((emp) => (
            <div
              className="card"
              key={emp.id}
            >
              <h2>{emp.name}</h2>
 
              <p>
                Department:
                {emp.department}
              </p>
 
              <p>
                Employee ID:
                {emp.id}
              </p>
 
              <button
                onClick={() =>
                  deleteEmployee(
                    emp.id
                  )
                }
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <h2>
            No Employees Found
          </h2>
        )}
      </div>
    </div>
  );
}
 
export default Task5;