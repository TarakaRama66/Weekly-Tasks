import { useState, useEffect } from "react";
 
function Day3App() {
  const [users, setUsers] = useState([]);
  const [editId, setEditId] = useState(null);
 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
  });
 
  const [errors, setErrors] = useState({});
 
  useEffect(() => {
    const savedUsers =
      JSON.parse(localStorage.getItem("users")) || [];
 
    setUsers(savedUsers);
  }, []);
 
  useEffect(() => {
    localStorage.setItem(
      "users",
      JSON.stringify(users)
    );
  }, [users]);
 
  const validateForm = () => {
    let validationErrors = {};
 
    if (!formData.name.trim()) {
      validationErrors.name = "Name is required";
    }
 
    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        formData.email
      )
    ) {
      validationErrors.email =
        "Valid Email Required";
    }
 
    if (!formData.role) {
      validationErrors.role =
        "Please Select Role";
    }
 
    return validationErrors;
  };
 
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
 
    const validationErrors =
      validateForm();
 
    if (
      Object.keys(validationErrors).length > 0
    ) {
      setErrors(validationErrors);
      return;
    }
 
    setErrors({});
 
    if (editId) {
      setUsers(
        users.map((user) =>
          user.id === editId
            ? {
                ...user,
                ...formData,
              }
            : user
        )
      );
 
      setEditId(null);
    } else {
      const newUser = {
        id: Date.now(),
        ...formData,
      };
 
      setUsers([...users, newUser]);
    }
 
    setFormData({
      name: "",
      email: "",
      role: "",
    });
  };
 
  const handleEdit = (user) => {
    setEditId(user.id);
 
    setFormData({
      name: user.name,
      email: user.email,
      role: user.role,
    });
  };
 
  const handleDelete = (id) => {
    setUsers(
      users.filter(
        (user) => user.id !== id
      )
    );
  };
 
  return (
    <div className="container">
      <h1>User Management System</h1>
 
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
        />
        <span>{errors.name}</span>
 
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
        />
        <span>{errors.email}</span>
 
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
        >
          <option value="">
            Select Role
          </option>
          <option value="Admin">
            Admin
          </option>
          <option value="HR">
            HR
          </option>
          <option value="Manager">
            Manager
          </option>
          <option value="Employee">
            Employee
          </option>
        </select>
 
        <span>{errors.role}</span>
 
        <button type="submit">
          {editId
            ? "Update User"
            : "Register User"}
        </button>
      </form>
 
      <div className="user-list">
        <h2>Registered Users</h2>
 
        {users.length === 0 ? (
          <h3>No Users Available</h3>
        ) : (
          users.map((user) => (
            <div
              className="card"
              key={user.id}
            >
              <h3>{user.name}</h3>
 
              <p>{user.email}</p>
 
              <p>{user.role}</p>
 
              <button
                className="edit"
                onClick={() =>
                  handleEdit(user)
                }
              >
                Edit
              </button>
 
              <button
                className="delete"
                onClick={() =>
                  handleDelete(
                    user.id
                  )
                }
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
 
export default Day3App;