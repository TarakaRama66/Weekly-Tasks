import { useState } from "react";

function ErrorsDynamically() {
  const [formData, setFormData] = useState({name: "",email: "",password: "",});
  const [errors, setErrors] = useState({});

  // Handle Input Change
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({...prev,[name]: value,}));
  }
  // Validate Form
  function validate() {
    let newErrors = {};
    if (formData.name === "") {
      newErrors.name = "Name is required";
    }
    if (formData.email === "") {
      newErrors.email = "Email is required";
    } else if (!formData.email.includes("@")) {
      newErrors.email = "Invalid Email";
    }
    if (formData.password === "") {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Minimum 6 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }
  // Submit
  function handleSubmit(e) {e.preventDefault();
    if (validate()) {
      alert("Form Submitted Successfully");
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Registration Form</h2>
      <input
        type="text"
        name="name"
        placeholder="Enter Name"
        value={formData.name}
        onChange={handleChange}/>
      <p style={{ color: "red" }}>{errors.name}</p>
      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        value={formData.email}
        onChange={handleChange}/>
      <p style={{ color: "red" }}>{errors.email}</p>
      <input
        type="password"
        name="password"
        placeholder="Enter Password"
        value={formData.password}
        onChange={handleChange}/>
      <p style={{ color: "red" }}>{errors.password}</p>
      <button type="submit">Submit</button>
    </form>
  );
}
export default ErrorsDynamically;