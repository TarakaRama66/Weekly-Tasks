import { useState } from "react";

function MainForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    country: "",
    agree: false,
  });

  const [errors, setErrors] = useState({});

  // Handle all input changes
  function handleChange(e) {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  // Validation
  function validate() {
    let newErrors = {};

    // Name
    if (formData.name.trim() === "") {
      newErrors.name = "Name is required";
    }

    // Email
    if (formData.email.trim() === "") {
      newErrors.email = "Email is required";
    } else if (!formData.email.includes("@")) {
      newErrors.email = "Enter a valid email";
    }

    // Password
    if (formData.password === "") {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    // Gender
    if (formData.gender === "") {
      newErrors.gender = "Select your gender";
    }

    // Country
    if (formData.country === "") {
      newErrors.country = "Select your country";
    }

    // Checkbox
    if (!formData.agree) {
      newErrors.agree = "Accept the terms";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  // Submit
  function handleSubmit(e) {
    e.preventDefault();

    if (validate()) {
      alert("Registration Successful!");

      console.log(formData);

      setFormData({
        name: "",
        email: "",
        password: "",
        gender: "",
        country: "",
        agree: false,
      });

      setErrors({});
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registration Form</h2>

      {/* Name */}
      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={formData.name}
        onChange={handleChange}
      />
      <p style={{ color: "red" }}>{errors.name}</p>

      {/* Email */}
      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        value={formData.email}
        onChange={handleChange}
      />
      <p style={{ color: "red" }}>{errors.email}</p>

      {/* Password */}
      <input
        type="password"
        name="password"
        placeholder="Enter Password"
        value={formData.password}
        onChange={handleChange}
      />
      <p style={{ color: "red" }}>{errors.password}</p>

      {/* Gender */}
      <h4>Gender</h4>

      <input
        type="radio"
        name="gender"
        value="Male"
        checked={formData.gender === "Male"}
        onChange={handleChange}
      />
      Male

      <input
        type="radio"
        name="gender"
        value="Female"
        checked={formData.gender === "Female"}
        onChange={handleChange}
      />
      Female

      <p style={{ color: "red" }}>{errors.gender}</p>

      {/* Country */}
      <select
        name="country"
        value={formData.country}
        onChange={handleChange}
      >
        <option value="">Select Country</option>
        <option value="India">India</option>
        <option value="USA">USA</option>
        <option value="Canada">Canada</option>
      </select>

      <p style={{ color: "red" }}>{errors.country}</p>

      {/* Terms */}
      <br />

      <input
        type="checkbox"
        name="agree"
        checked={formData.agree}
        onChange={handleChange}
      />

      I agree to Terms & Conditions

      <p style={{ color: "red" }}>{errors.agree}</p>

      <button type="submit">Register</button>
    </form>
  );
}

export default MainForm;