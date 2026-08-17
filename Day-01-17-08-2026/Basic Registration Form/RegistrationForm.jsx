import { useState } from "react";

function RegistrationForm() {
  const [formData, setFormData] = useState({name: "",email: "",phone: "",age: "",
    gender: "",city: "",password: "",confirmPassword: "",});

  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    setFormData({...formData,[e.target.name]: e.target.value,});
  };
  const handleSubmit = (e) => {e.preventDefault();
    let newErrors = {};
    // Name Validation
    if (!formData.name.trim()) {newErrors.name = "Name is required";}
    // Email Validation
    if (
      !formData.email.includes("@") ||
      !formData.email.includes(".")
    ) {newErrors.email = "Enter a valid email";}
    // Phone Validation
    if (formData.phone.length !== 10) {
      newErrors.phone = "Phone number must be 10 digits";
    }
    // Age Validation
    if (formData.age < 18) {newErrors.age = "Age must be 18 or above";}
    // Gender Validation
    if (!formData.gender) {newErrors.gender = "Select gender";}
    // City Validation
    if (!formData.city) {newErrors.city = "Select city";}
    // Password Validation
    if (formData.password.length < 6) {newErrors.password ="Password must contain at least 8 characters";}
    // Confirm Password Validation
    if (formData.password !== formData.confirmPassword) {newErrors.confirmPassword = "Passwords do not match";}
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {alert("Registration Successful");
      console.log(formData);
      setFormData({name: "",email: "",phone: "",age: "",gender: "",
        city: "",password: "",confirmPassword: "",});
    }
  };
  return (
    <div>
      <h2>Student Registration Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={formData.name}
            onChange={handleChange}/>
          <p>{errors.name}</p>
        </div>
        {/* Email */}
        <div>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}/>
          <p>{errors.email}</p>
        </div>
        {/* Phone */}
        <div>
          <input
            type="number"
            name="phone"
            placeholder="Enter Phone Number"
            value={formData.phone}
            onChange={handleChange}/>
          <p>{errors.phone}</p>
        </div>
        {/* Age */}
        <div>
          <input
            type="number"
            name="age"
            placeholder="Enter Age"
            value={formData.age}
            onChange={handleChange}/>
          <p>{errors.age}</p>
        </div>
        {/* Gender */}
        <div>
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === "Male"}
              onChange={handleChange}/>Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === "Female"}
              onChange={handleChange}/>Female
          </label>
          <p>{errors.gender}</p>
        </div>
        {/* City */}
        <div>
          <select name="city"value={formData.city}onChange={handleChange}>
            <option value="">Select City</option>
            <option value="Hyderabad">Hyderabad</option>
            <option value="Vizag">Vizag</option>
            <option value="Vijayawada">Vijayawada</option>
            <option value="Bangalore">Bangalore</option>
          </select>
          <p>{errors.city}</p>
        </div>
        {/* Password */}
        <div>
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}/>
          <p>{errors.password}</p>
        </div>
        {/* Confirm Password */}
        <div>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}/>
          <p>{errors.confirmPassword}</p>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default RegistrationForm;