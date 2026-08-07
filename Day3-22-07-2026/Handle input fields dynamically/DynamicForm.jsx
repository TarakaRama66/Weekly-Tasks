import { useState } from "react";

function DynamicForm() {
  const [formData, setFormData] = useState({name: "",email: "",password: "",});

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevData) => ({...prevData,[name]: value,}));
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
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
      <br /><br />
      <input
        type="email"
        name="email"
        placeholder="Enter Email"
        value={formData.email}
        onChange={handleChange}/>
      <br /><br />
      <input
        type="password"
        name="password"
        placeholder="Enter Password"
        value={formData.password}
        onChange={handleChange}/>
      <br /><br />
      <button type="submit">Register</button>
      <h3>Preview</h3>
      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <p>Password: {formData.password}</p>
    </form>
  );
}
export default DynamicForm;