import { useState } from "react";
 
function Task2() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
    role: "",
  });
 
  const [errors, setErrors] = useState({});
 
  const validate = () => {
    let newErrors = {};
 
    if (!formData.fullname.trim()) {
      newErrors.fullname = "Full Name is required";
    }
 
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Valid Email required";
    }
 
    if (!/^[0-9]{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Mobile must be 10 digits";
    }
 
    if (formData.password.length < 8) {
      newErrors.password = "Minimum 8 characters";
    }
 
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }
 
    if (!formData.role) {
      newErrors.role = "Select Role";
    }
 
    return newErrors;
  };
 
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
 
    const validationErrors = validate();
 
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
 
    setErrors({});
    alert("Registration Successful");
 
    setFormData({
      fullname: "",
      email: "",
      mobile: "",
      password: "",
      confirmPassword: "",
      role: "",
    });
  };
 
  const getPasswordStrength = () => {
    if (formData.password.length >= 12) return "Strong";
    if (formData.password.length >= 8) return "Medium";
    return "Weak";
  };
 
  return (
    <div className="container">
      <h1>Employee Registration Form</h1>
 
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullname"
          placeholder="Full Name"
          value={formData.fullname}
          onChange={handleChange}
        />
        <p>{errors.fullname}</p>
 
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <p>{errors.email}</p>
 
        <input
          type="text"
          name="mobile"
          placeholder="Mobile Number"
          value={formData.mobile}
          onChange={handleChange}
        />
        <p>{errors.mobile}</p>
 
        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
        >
          <option value="">Select Role</option>
          <option value="Admin">Admin</option>
          <option value="HR">HR</option>
          <option value="Manager">Manager</option>
          <option value="Employee">Employee</option>
        </select>
        <p>{errors.role}</p>
 
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <p>{errors.password}</p>
 
        <h4>
          Password Strength: {getPasswordStrength()}
        </h4>
 
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <p>{errors.confirmPassword}</p>
 
        <button type="submit">
          Register Employee
        </button>
      </form>
 
      <div className="preview">
        <h2>Live Preview</h2>
 
        <h3>Name: {formData.fullname}</h3>
        <h3>Email: {formData.email}</h3>
        <h3>Mobile: {formData.mobile}</h3>
        <h3>Role: {formData.role}</h3>
      </div>
    </div>
  );
}
 
export default Task2;