import { useState } from "react";

function BookingForm() {

  const [formData, setFormData] = useState({name: "",seats: "",movie: ""});
  const [errors, setErrors] = useState({});
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({...formData,[name]: value});
  }
  function handleSubmit(e) {
    e.preventDefault();
    let newErrors = {};
    if (!formData.name)
      newErrors.name = "Enter Name";

    if (!formData.movie)
      newErrors.movie = "Select Movie";

    if (!formData.seats)
      newErrors.seats = "Enter Seats";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Ticket Booked Successfully");
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Book Ticket</h2>
      <input
        name="name"
        placeholder="Customer Name"
        value={formData.name}
        onChange={handleChange}/>
      <p>{errors.name}</p>

      <select
        name="movie"
        value={formData.movie}
        onChange={handleChange}>
        <option value="">Select Movie</option>
        <option>Avatar</option>
        <option>Leo</option>
        <option>Pushpa</option>
      </select>
      <p>{errors.movie}</p>

      <input
        name="seats"
        placeholder="Number of Seats"
        value={formData.seats}
        onChange={handleChange}/>

      <p>{errors.seats}</p>

      <button>Confirm Booking</button>
    </form>
  );
}
export default BookingForm;