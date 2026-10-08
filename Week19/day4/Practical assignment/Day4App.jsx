import { useEffect, useState } from "react";
 
function Day4App() {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
 
  const [search, setSearch] = useState("");
  const [companyFilter, setCompanyFilter] = useState("All");
 
  const [editingId, setEditingId] = useState(null);
 
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: ""
  });
 
  // Fetch Users
  useEffect(() => {
    fetchUsers();
  }, []);
 
  // Search & Filter
  useEffect(() => {
    let result = users;
 
    if (search) {
      result = result.filter(
        (user) =>
          user.name
            .toLowerCase()
            .includes(search.toLowerCase()) ||
          user.email
            .toLowerCase()
            .includes(search.toLowerCase())
      );
    }
 
    if (companyFilter !== "All") {
      result = result.filter(
        (user) =>
          user.company.name === companyFilter
      );
    }
 
    setFilteredUsers(result);
  }, [search, companyFilter, users]);
 
  const fetchUsers = async () => {
    try {
      setLoading(true);
 
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
 
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }
 
      const data = await response.json();
 
      setUsers(data);
      setFilteredUsers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
 
  // Form Input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
 
  // Add User
  const addUser = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json"
          },
          body: JSON.stringify(formData)
        }
      );
 
      const data = await response.json();
 
      const newUser = {
        id: Date.now(),
        name: formData.name,
        email: formData.email,
        company: {
          name: formData.company
        }
      };
 
      setUsers([newUser, ...users]);
 
      setFormData({
        name: "",
        email: "",
        company: ""
      });
    } catch {
      alert("Add User Failed");
    }
  };
 
  // Edit User
  const editUser = (user) => {
    setEditingId(user.id);
 
    setFormData({
      name: user.name,
      email: user.email,
      company: user.company.name
    });
  };
 
  // Update User
  const updateUser = async () => {
    try {
      await fetch(
        `https://jsonplaceholder.typicode.com/users/${editingId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type":
              "application/json"
          },
          body: JSON.stringify(formData)
        }
      );
 
      const updatedUsers = users.map(
        (user) =>
          user.id === editingId
            ? {
                ...user,
                name: formData.name,
                email: formData.email,
                company: {
                  name: formData.company
                }
              }
            : user
      );
 
      setUsers(updatedUsers);
 
      setEditingId(null);
 
      setFormData({
        name: "",
        email: "",
        company: ""
      });
    } catch {
      alert("Update Failed");
    }
  };
 
  // Delete User
  const deleteUser = async (id) => {
    try {
      await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`,
        {
          method: "DELETE"
        }
      );
 
      setUsers(
        users.filter(
          (user) => user.id !== id
        )
      );
    } catch {
      alert("Delete Failed");
    }
  };
 
  if (loading) {
    return <h1>Loading Users...</h1>;
  }
 
  if (error) {
    return <h1>{error}</h1>;
  }
 
  return (
    <div style={{ padding: "20px" }}>
      <h1>User Management System</h1>
 
      {/* Form */}
 
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
      />
 
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
 
      <input
        type="text"
        name="company"
        placeholder="Company"
        value={formData.company}
        onChange={handleChange}
      />
 
      {editingId ? (
        <button onClick={updateUser}>
          Update User
        </button>
      ) : (
        <button onClick={addUser}>
          Add User
        </button>
      )}
 
      <hr />
 
      {/* Search */}
 
      <input
        type="text"
        placeholder="Search User"
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />
 
      {/* Filter */}
 
      <select
        value={companyFilter}
        onChange={(e) =>
          setCompanyFilter(e.target.value)
        }
      >
        <option value="All">
          All Companies
        </option>
 
        {[
          ...new Set(
            users.map(
              (user) =>
                user.company?.name
            )
          )
        ].map((company) => (
          <option
            key={company}
            value={company}
          >
            {company}
          </option>
        ))}
      </select>
 
      <h3>
        Total Users :
        {filteredUsers.length}
      </h3>
 
      {/* User List */}
 
      {filteredUsers.length === 0 ? (
        <h2>No Users Found</h2>
      ) : (
        filteredUsers.map((user) => (
          <div
            key={user.id}
            style={{
              border: "1px solid gray",
              margin: "10px",
              padding: "10px"
            }}
          >
            <h3>{user.name}</h3>
 
            <p>{user.email}</p>
 
            <p>
              {user.company?.name}
            </p>
 
            <button
              onClick={() =>
                editUser(user)
              }
            >
              Edit
            </button>
 
            <button
              onClick={() =>
                deleteUser(user.id)
              }
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}
 
export default Day4App;