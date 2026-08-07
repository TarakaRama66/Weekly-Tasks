function DefaultValues1() {
  const students = ["Tarak"];

  const [first, second = "Ram"] = students;

  return (
    <>
    <h2>Default Values</h2>
      <h2>{first}</h2>
      <h2>{second}</h2>
    </>
  );
}
export default DefaultValues1;