function App() {
  const students = ["Tarak", "Siddu", "Shiva", "Harsha", "Ram"];

  return (
    <>
      <h2>Student List</h2>

      {students.map((student, index) => (
        <p key={index}>{student}</p>
      ))}
    </>
  );
}

export default App;