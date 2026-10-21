import { useState } from "react";

function Task10App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    age: ""
  });

  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData(previousData => ({
      ...previousData,
      [name]: value
    }));

    // Clear the current field error while the user edits it.
    setErrors(previousErrors => ({
      ...previousErrors,
      [name]: ""
    }));

    setSubmittedData(null);
  }

  function validateForm() {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Name must contain at least 3 characters.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
    ) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must contain at least 8 characters.";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password.";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    if (!formData.age) {
      newErrors.age = "Age is required.";
    } else if (
      !Number.isInteger(Number(formData.age)) ||
      Number(formData.age) < 18 ||
      Number(formData.age) > 100
    ) {
      newErrors.age = "Age must be a whole number between 18 and 100.";
    }

    return newErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setSubmittedData(null);
      return;
    }

    setSubmittedData({
      name: formData.name.trim(),
      email: formData.email.trim(),
      age: formData.age
    });

    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      age: ""
    });
  }

  return (
    <div>
      <h1>NYB Infotech</h1>
      <h2>Employee Registration</h2>

      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor="name">Full Name:</label>
          <br />
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter full name"
          />
          {errors.name && <p role="alert">{errors.name}</p>}
        </div>

        <br />

        <div>
          <label htmlFor="email">Email:</label>
          <br />
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
          />
          {errors.email && <p role="alert">{errors.email}</p>}
        </div>

        <br />

        <div>
          <label htmlFor="password">Password:</label>
          <br />
          <input
            id="password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Minimum 8 characters"
          />
          {errors.password && <p role="alert">{errors.password}</p>}
        </div>

        <br />

        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <br />
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Re-enter password"
          />
          {errors.confirmPassword && (
            <p role="alert">{errors.confirmPassword}</p>
          )}
        </div>

        <br />

        <div>
          <label htmlFor="age">Age:</label>
          <br />
          <input
            id="age"
            name="age"
            type="number"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter age"
          />
          {errors.age && <p role="alert">{errors.age}</p>}
        </div>

        <br />

        <button type="submit">Register</button>
      </form>

      {submittedData && (
        <div>
          <h2>Registration Successful!</h2>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
          <p>Age: {submittedData.age}</p>
        </div>
      )}
    </div>
  );
}

export default Task10App;