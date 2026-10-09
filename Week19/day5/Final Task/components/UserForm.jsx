 import { useEffect, useState } from "react";
 
const emptyForm = {
  name: "",
  email: "",
  role: "User",
};
 
function UserForm({ onSave, editingUser, onCancel }) {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});
 
  useEffect(() => {
    setForm(
      editingUser
        ? {
            name: editingUser.name,
            email: editingUser.email,
            role: editingUser.role,
          }
        : emptyForm
    );
    setErrors({});
  }, [editingUser]);
 
  function handleChange(event) {
    const { name, value } = event.target;
 
    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  }
 
  function handleSubmit(event) {
    event.preventDefault();
 
    const newErrors = {};
 
    if (form.name.trim().length < 2) {
      newErrors.name = "Enter at least 2 characters.";
    }
 
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address.";
    }
 
    if (!["Admin", "Manager", "User"].includes(form.role)) {
      newErrors.role = "Select a valid role.";
    }
 
    setErrors(newErrors);
 
    if (Object.keys(newErrors).length > 0) return;
 
    onSave({
      ...form,
      name: form.name.trim(),
      email: form.email.trim(),
    });
 
    setForm(emptyForm);
    setErrors({});
  }
 
  return (
    <section className="panel">
      <h2>{editingUser ? "Edit User" : "Add New User"}</h2>
 
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="name">Full Name</label>
        <input
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter full name"
          required
        />
        {errors.name && <p className="error">{errors.name}</p>}
 
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter email address"
          required
        />
        {errors.email && <p className="error">{errors.email}</p>}
 
        <label htmlFor="role">Role</label>
        <select
          id="role"
          name="role"
          value={form.role}
          onChange={handleChange}
        >
          <option value="User">User</option>
          <option value="Manager">Manager</option>
          <option value="Admin">Admin</option>
        </select>
        {errors.role && <p className="error">{errors.role}</p>}
 
        <div className="form-actions">
          <button type="submit">
            {editingUser ? "Update User" : "Add User"}
          </button>
 
          {editingUser && (
            <button
              type="button"
              className="cancel-btn"
              onClick={onCancel}
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </section>
  );
}
 
export default UserForm;