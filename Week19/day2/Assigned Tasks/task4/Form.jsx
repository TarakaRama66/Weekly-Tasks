import { useState } from "react";
 
function Form({ sendFeedback }) {
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    experience: "",
    score: "",
  });
  const handleChange = (e) => {setFormData({...formData,[e.target.name]: e.target.value,});};
  const handleSubmit = (e) => {e.preventDefault();
    sendFeedback({...formData,score: Number(formData.score),});

    setFormData({
      name: "",
      position: "",
      experience: "",
      score: "",
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Interview Evaluation Form</h2>
      <input
        type="text"
        name="name"
        placeholder="Candidate Name"
        value={formData.name}
        onChange={handleChange}
      />
      <br></br>
      <br></br>
      <input
        type="text"
        name="position"
        placeholder="Position"
        value={formData.position}
        onChange={handleChange}/>
      <br></br>
      <br></br>
      <input
        type="text"
        name="experience"
        placeholder="Experience"
        value={formData.experience}
        onChange={handleChange}/>
      <br></br>
      <br></br>
      <input
        type="number"
        name="score"
        placeholder="Interview Score"
        value={formData.score}
        onChange={handleChange}/>
      <br></br>
      <br></br> 
      <button type="submit">Submit Feedback</button>
    </form>
  );
}
export default Form;