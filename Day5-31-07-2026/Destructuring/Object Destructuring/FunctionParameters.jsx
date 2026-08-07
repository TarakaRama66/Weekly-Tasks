function Student({ name, course }) {
  return (
    <>
    <h2>Destructuring Function Parameters</h2>
      <h2>{name}</h2>
      <p>{course}</p>
    </>
  );
}
function FunctionParameters() {
  return (
    <>
      <Student
        name="Gupta"
        course="React"/>
    </>
  );
}
export default FunctionParameters;