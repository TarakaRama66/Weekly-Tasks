function MultipleParameters() {
  function showDetails(id, name) {
    alert("ID: " + id + "\nName: " + name);
  }
  return (
    <>
    <h1>Passing Multiple Parameters</h1>
      <button onClick={() => showDetails(1, "Gupta")}>Show Details</button>
    </>
  );
}
export default MultipleParameters;