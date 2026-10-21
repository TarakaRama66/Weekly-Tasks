import { useState } from "react";

// Reusable student form
function StudentForm({ onSave, editingStudent, onCancel }) {
  const emptyForm = {
    name: "",
    email: "",
    course: "",
    year: ""
  };

  const [formData, setFormData] = useState(
    editingStudent || emptyForm
  );

  const [errors, setErrors] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData(previous => ({
      ...previous,
      [name]: value
    }));

    setErrors(previous => ({
      ...previous,
      [name]: ""
    }));
  }

  function validateForm() {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Student name is required.";
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

    if (!formData.course.trim()) {
      newErrors.course = "Course is required.";
    }

    if (!formData.year) {
      newErrors.year = "Please select a study year.";
    }

    return newErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    onSave({
      ...formData,
      name: formData.name.trim(),
      email: formData.email.trim(),
      course: formData.course.trim(),
      id: editingStudent?.id
    });

    setFormData(emptyForm);
    setErrors({});
  }

  return (
    <section>
      <h2>{editingStudent ? "Edit Student" : "Add Student"}</h2>

      <form onSubmit={handleSubmit} noValidate>
        <div>
          <label htmlFor="name">Student Name:</label>
          <br />
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter student name"
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
            placeholder="Enter email address"
          />
          {errors.email && <p role="alert">{errors.email}</p>}
        </div>

        <br />

        <div>
          <label htmlFor="course">Course:</label>
          <br />
          <input
            id="course"
            name="course"
            value={formData.course}
            onChange={handleChange}
            placeholder="Enter course name"
          />
          {errors.course && <p role="alert">{errors.course}</p>}
        </div>

        <br />

        <div>
          <label htmlFor="year">Study Year:</label>
          <br />
          <select
            id="year"
            name="year"
            value={formData.year}
            onChange={handleChange}
          >
            <option value="">Select year</option>
            <option value="1st Year">1st Year</option>
            <option value="2nd Year">2nd Year</option>
            <option value="3rd Year">3rd Year</option>
            <option value="4th Year">4th Year</option>
          </select>
          {errors.year && <p role="alert">{errors.year}</p>}
        </div>

        <br />

        <button type="submit">
          {editingStudent ? "Update Student" : "Add Student"}
        </button>

        {editingStudent && (
          <button type="button" onClick={onCancel}>
            Cancel Edit
          </button>
        )}
      </form>
    </section>
  );
}

// Reusable student card
function StudentCard({ student, onView, onEdit, onDelete }) {
  return (
    <li>
      <h3>{student.name}</h3>
      <p>Email: {student.email}</p>
      <p>Course: {student.course}</p>
      <p>Year: {student.year}</p>

      <button type="button" onClick={() => onView(student)}>
        View Details
      </button>{" "}

      <button type="button" onClick={() => onEdit(student)}>
        Edit
      </button>{" "}

      <button
        type="button"
        onClick={() => onDelete(student.id)}
      >
        Delete
      </button>
    </li>
  );
}

// Main parent component
function MiniApp() {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Kiran Kumar",
      email: "rahul@example.com",
      course: "React JS",
      year: "3rd Year"
    },
    {
      id: 2,
      name: "Rohit Sharma",
      email: "priya@example.com",
      course: "Computer Science",
      year: "2nd Year"
    },
    {
      id: 3,
      name: "Kiran Reddy",
      email: "kiran@example.com",
      course: "JavaScript",
      year: "4th Year"
    }
  ]);

  const [search, setSearch] = useState("");
  const [editingStudent, setEditingStudent] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [message, setMessage] = useState("");

  function handleSave(studentData) {
    if (editingStudent) {
      setStudents(previous =>
        previous.map(student =>
          student.id === editingStudent.id
            ? { ...student, ...studentData, id: student.id }
            : student
        )
      );

      if (selectedStudent?.id === editingStudent.id) {
        setSelectedStudent(previous => ({
          ...previous,
          ...studentData,
          id: editingStudent.id
        }));
      }

      setEditingStudent(null);
      setMessage("Student updated successfully.");
    } else {
      const newStudent = {
        ...studentData,
        id: Date.now() + Math.random()
      };

      setStudents(previous => [...previous, newStudent]);
      setMessage("Student added successfully.");
    }
  }

  function handleEdit(student) {
    setEditingStudent({ ...student });
    setSelectedStudent(null);
    setMessage("");
  }

  function handleDelete(id) {
    setStudents(previous =>
      previous.filter(student => student.id !== id)
    );

    if (selectedStudent?.id === id) {
      setSelectedStudent(null);
    }

    if (editingStudent?.id === id) {
      setEditingStudent(null);
    }

    setMessage("Student deleted successfully.");
  }

  const filteredStudents = students.filter(student => {
    const query = search.trim().toLowerCase();

    return (
      student.name.toLowerCase().includes(query) ||
      student.email.toLowerCase().includes(query) ||
      student.course.toLowerCase().includes(query)
    );
  });

  return (
    <main>
      <h1>Student Management System</h1>
      <p>Manage student records using React.</p>

      <hr />

      <StudentForm
        key={editingStudent?.id ?? "new-student"}
        onSave={handleSave}
        editingStudent={editingStudent}
        onCancel={() => setEditingStudent(null)}
      />

      {message && <p role="status">{message}</p>}

      <hr />

      <section>
        <h2>Student List ({filteredStudents.length})</h2>

        <label htmlFor="search">Search Students:</label>
        <br />

        <input
          id="search"
          type="text"
          value={search}
          onChange={event => setSearch(event.target.value)}
          placeholder="Search by name, email, or course"
        />

        {filteredStudents.length === 0 ? (
          <p>
            {students.length === 0
              ? "No students available. Add your first student."
              : "No students match your search."}
          </p>
        ) : (
          <ul>
            {filteredStudents.map(student => (
              <StudentCard
                key={student.id}
                student={student}
                onView={setSelectedStudent}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
          </ul>
        )}
      </section>

      {selectedStudent && (
        <section>
          <hr />
          <h2>Student Details</h2>
          <p>ID: {selectedStudent.id}</p>
          <p>Name: {selectedStudent.name}</p>
          <p>Email: {selectedStudent.email}</p>
          <p>Course: {selectedStudent.course}</p>
          <p>Study Year: {selectedStudent.year}</p>

          <button
            type="button"
            onClick={() => setSelectedStudent(null)}
          >
            Close Details
          </button>
        </section>
      )}
    </main>
  );
}

export default MiniApp;