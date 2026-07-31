function Student(props) {
  return (
    <>
      <h2>Name: {props.name}</h2>
      <p>Course: {props.course}</p>
      <p>Age: {props.age}</p>
    </>
  );
}
function Withoutde() {
  return (
    <Student
      name="Tilak"
      course="JavaScript"
      age={24}
    />
  );
}

export default Withoutde;