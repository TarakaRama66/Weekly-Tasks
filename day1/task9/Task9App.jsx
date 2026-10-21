import { useState } from "react";

function Task9App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    department: "Frontend",
    experience: ""
  });

  const [employees, setEmployees] = useState([]);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData(previousData => ({
      ...previousData,
      [name]: value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newEmployee = {
      ...formData,
      id: Date.now()
    };

    setEmployees(previousEmployees => [
      ...previousEmployees,
      newEmployee
    ]);

    setFormData({
      name: "",
      email: "",
      age: "",
      department: "Frontend",
      experience: ""
    });
  }

  return (
    <div>
      <h1>NYB Infotech</h1>
      <h2>Employee Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Employee Name:</label>
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <br />

        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <br />

        <div>
          <label htmlFor="age">Age:</label>
          <input
            id="age"
            name="age"
            type="number"
            min="18"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>

        <br />

        <div>
          <label htmlFor="department">Department:</label>
          <select
            id="department"
            name="department"
            value={formData.department}
            onChange={handleChange}
          >
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
            <option value="Testing">Testing</option>
            <option value="HR">HR</option>
          </select>
        </div>

        <br />

        <div>
          <label htmlFor="experience">Experience:</label>
          <select
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            required
          >
            <option value="">Select experience</option>
            <option value="Fresher">Fresher</option>
            <option value="1-2 Years">1-2 Years</option>
            <option value="3+ Years">3+ Years</option>
          </select>
        </div>

        <br />

        <button type="submit">Register Employee</button>
      </form>

      <hr />

      <h2>Registered Employees</h2>

      {employees.length === 0 ? (
        <p>No employees registered yet.</p>
      ) : (
        employees.map(employee => (
          <div key={employee.id}>
            <h3>{employee.name}</h3>
            <p>Email: {employee.email}</p>
            <p>Age: {employee.age}</p>
            <p>Department: {employee.department}</p>
            <p>Experience: {employee.experience}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Task9App;