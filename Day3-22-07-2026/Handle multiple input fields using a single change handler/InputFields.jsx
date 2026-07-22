import { useState } from "react";

function InputFields() {
  const [formData, setFormData] = useState({firstName: "",lastName: "",email: "",phone: "",});

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prevData) => ({...prevData,[name]: value,}));
  }
  function handleSubmit(e) {e.preventDefault();
    console.log(formData);
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Employee Registration</h2>
      <input
        type="text"
        name="firstName"
        placeholder="First Name"
        value={formData.firstName}
        onChange={handleChange}/>
      <br /><br />
      <input
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={formData.lastName}
        onChange={handleChange}/>
      <br /><br />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}/>
      <br /><br />
      <input
        type="tel"
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}/>
      <br /><br />
      <button type="submit">Submit</button>
      <hr />
      <h3>Preview</h3>
      <p>First Name: {formData.firstName}</p>
      <p>Last Name: {formData.lastName}</p>
      <p>Email: {formData.email}</p>
      <p>Phone: {formData.phone}</p>
    </form>
  );
}
export default InputFields;