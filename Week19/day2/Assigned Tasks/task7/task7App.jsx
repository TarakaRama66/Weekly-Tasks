import { useState } from "react";
 
function Task7App() {
  const [search, setSearch] = useState("");
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Taraka Ram",
      role: "Frontend Developer",
      rating: 8,
      status: "Active",
    },
    {
      id: 2,
      name: "Siddu",
      role: "React Developer",
      rating: 7,
      status: "Active",
    },
    {
      id: 3,
      name: "Sanju",
      role: "UI Developer",
      rating: 6,
      status: "Inactive",
    },
  ]);
  const increaseRating = (id) => {
    setEmployees(
      employees.map((emp) =>emp.id === id ? {...emp,
              rating: emp.rating < 10 ? emp.rating + 1 : 10,} : emp));
    };
  const decreaseRating = (id) => {
    setEmployees(employees.map((emp) =>emp.id === id ? {...emp,
              rating: emp.rating > 1 ? emp.rating - 1 : 1,} : emp));
  };
  const promoteEmployee = (id) => {
    setEmployees(
      employees.map((emp) =>emp.id === id ? {...emp,
              role: "Senior Developer",} : emp));
  };
  const toggleStatus = (id) => {
    setEmployees(
        employees.map((emp) =>emp.id === id ? {...emp,
              status: emp.status === "Active" ? "Inactive" : "Active",}: emp));
  };
  const filteredEmployees =
    employees.filter((emp) => emp.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  return (
    <div style={{ padding: "20px" }}>
      <h1>
        Smart Employee Review Dashboard
      </h1>
      <input
        type="text"
        placeholder="Search Employee"
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }/>
      <hr></hr>
      {filteredEmployees.map((emp) => (
        <div
          key={emp.id}
          style={{
            border: "2px solid black",
            margin: "15px",
            padding: "15px",
          }}>
          <h2>{emp.name}</h2>
          <p>Role: {emp.role}</p>
          <p>
            Rating: {emp.rating}/10
          </p>
          <p>Status: {emp.status}</p>
          <button onClick={() =>increaseRating(emp.id)}>Increase Rating</button>-

          <button onClick={() =>decreaseRating(emp.id)}>Decrease Rating</button>-

          <button onClick={() =>promoteEmployee(emp.id)}>Promote</button>-

          <button onClick={() =>toggleStatus(emp.id)}>Toggle Status</button>
        </div>
      ))}
    </div>
  );
}
export default Task7App;