function RenameVariables() {
  const student = {
    name: "Tarak Gupta",
    age: 23,
  };
  const {name: studentName,age: studentAge,} = student;
  return (
    <>
    <h2>Rename variables</h2>
      <h2>{studentName}</h2>
      <p>{studentAge}</p>
    </>
  );
}
export default RenameVariables;