function DefaultValues() {
  const student = {
    name: "Mahesh",
  };

  const {name,course = "React",} = student;
  return (
    <>
    <h2>Default Values</h2>
      <h2>{name}</h2>
      <p>{course}</p>
    </>
  );
}
export default DefaultValues;