import { useState } from "react";
 
function Day4Task8() {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    course: ""
  });
 
  const [message, setMessage] = useState("");
 
  const handleChange = (e) => {
    setStudent({
      ...student,
      [e.target.name]: e.target.value
    });
  };
 
  const addStudent = async (e) => {
    e.preventDefault();
 
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json"
          },
          body: JSON.stringify(student)
        }
      );
 
      if (!response.ok) {
        throw new Error(
          "Failed To Add Student"
        );
      }
 
      const data = await response.json();
 
      setMessage(
        `Student Added Successfully (ID: ${data.id})`
      );
 
      setStudent({
        name: "",
        email: "",
        course: ""
      });
    } catch (error) {
      setMessage(error.message);
    }
  };
 
  return (
    <div>
      <h1>Student Registration</h1>
 
      <form onSubmit={addStudent}>
        <input
          type="text"
          name="name"
          placeholder="Student Name"
          value={student.name}
          onChange={handleChange}
        />
 
        <br></br>
        <br></br>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={student.email}
          onChange={handleChange}
        />
        <br></br>
        <br></br> 
        <input
          type="text"
          name="course"
          placeholder="Course"
          value={student.course}
          onChange={handleChange}
        />
 
        <br></br>
        <br></br>
        <button type="submit">Add Student</button>
      </form>
 
      <h3>{message}</h3>
    </div>
  );
}
 
export default Day4Task8;