function Student({ name, course, age }) {
  return (
    <>
      <h2>Name: {name}</h2>
      <p>Course: {course}</p>
      <p>Age: {age}</p>
    </>
  );
}

function WithDe() {
  return (
    <Student
      name="Tarak"
      course="React"
      age={23}
    />
  );
}
export default WithDe;