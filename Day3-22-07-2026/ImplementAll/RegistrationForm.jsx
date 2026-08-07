import { useState } from "react";

function RegistrationForm() {
  const [formData, setFormData] = useState({name: "",about: "",country: "",gender: "",hobbies: [],});
  const [file, setFile] = useState(null);

  // Handle text field, textarea, dropdown, radio
  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({...prev,[name]: value,}));
  }
  // Handle checkboxes
  function handleCheckbox(e) {
    const { value, checked } = e.target;

    if (checked) {
      setFormData((prev) => ({...prev,hobbies: [...prev.hobbies, value],}));
    } else {
      setFormData((prev) => ({...prev,hobbies: prev.hobbies.filter((item) => item !== value),}));
    }
  }
  // Handle file input
  function handleFile(e) {
    setFile(e.target.files[0]);
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    console.log(file);
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Student Details</h2>
    {/* Text Field */}
      <label>Name:</label><br />
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}/>
      <br /><br />
    {/* Text Area */}
      <label>About:</label><br />
      <textarea
        name="about"
        value={formData.about}
        onChange={handleChange}></textarea>
      <br /><br />
    {/* Dropdown */}
      <label>Country:</label><br />
      <select
        name="country"
        value={formData.country}
        onChange={handleChange}>
        <option value="">Select</option>
        <option value="India">India</option>
        <option value="USA">USA</option>
        <option value="Canada">Canada</option>
      </select>
      <br /><br />
      {/* Radio Buttons */}
      <label>Gender:</label><br />
      <input
        type="radio"
        name="gender"
        value="Male"
        checked={formData.gender === "Male"}
        onChange={handleChange}/>
      Male
      <input
        type="radio"
        name="gender"
        value="Female"
        checked={formData.gender === "Female"}
        onChange={handleChange}/>
      Female
      <br /><br />
      {/* Checkboxes */}
      <label>Hobbies:</label><br />
      <input
        type="checkbox"
        value="Reading"
        checked={formData.hobbies.includes("Reading")}
        onChange={handleCheckbox}/>
        Reading
      <input
        type="checkbox"
        value="Sports"
        checked={formData.hobbies.includes("Sports")}
        onChange={handleCheckbox}/>
      Sports
      <input
        type="checkbox"
        value="Music"
        checked={formData.hobbies.includes("Music")}
        onChange={handleCheckbox}/>
      Music
      <br /><br />
      {/* File Input */}
      <label>Upload File:</label><br />
      <input
        type="file"
        onChange={handleFile}/>
      <br /><br />
      <button type="submit">Submit</button>
      <hr></hr>
      <h3>Preview</h3>
      <p><b>Name:</b> {formData.name}</p>
      <p><b>About:</b> {formData.about}</p>
      <p><b>Country:</b> {formData.country}</p>
      <p><b>Gender:</b> {formData.gender}</p>
      <p><b>Hobbies:</b> {formData.hobbies.join(", ")}</p>
      <p><b>File:</b> {file ? file.name : "No file selected"}</p>
    </form>
  );
}
export default RegistrationForm;