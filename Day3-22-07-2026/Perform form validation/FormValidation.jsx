import { useState } from "react";

function FormValidation() {
  const [formData, setFormData] = useState({name: "",email: "",password: "",});
  const [errors, setErrors] = useState({});

  // Handle Input Changes
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({...prev,[name]: value,}));
  }
  // Validate Form
  function validate() {
    let newErrors = {};
    if (formData.name.trim() === "") {
      newErrors.name = "Name is required";
    }
    if (formData.email.trim() === "") {
      newErrors.email = "Email is required";
    } else if (!formData.email.includes("@")) {
      newErrors.email = "Enter a valid email";
    }
    if (formData.password.trim() === "") {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }
  // Submit Form
  function handleSubmit(e) {e.preventDefault();
    if (validate()) {
      alert("Form Submitted Successfully!");
      console.log(formData);
      // Reset form
      setFormData({name: "",email: "",password: "",});
      setErrors({});
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Form Validation</h2>
      <label>Name:</label><br />
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}/>
      <br />
      <span style={{ color: "red" }}>{errors.name}</span>
      <br /><br />
      <label>Email:</label><br />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}/>
      <br />
      <span style={{ color: "red" }}>{errors.email}</span>
      <br /><br />
      <label>Password:</label><br />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}/>
      <br />
      <span style={{ color: "red" }}>{errors.password}</span>
      <br /><br />
      <button type="submit">Submit</button>
    </form>
  );
}
export default FormValidation;