function Students() {
  const students = ["Tarak","Ram","Tilak","Gupta"];
  return (
    <>
      <h1>Students</h1>
      <ul>
        {students.map((student, index) => (<li key={index}>{student}</li>))}
      </ul>
    </>
  );
}
export default Students;