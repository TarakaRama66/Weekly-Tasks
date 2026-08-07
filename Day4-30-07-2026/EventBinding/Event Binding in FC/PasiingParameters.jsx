function PassingParameters() {
  function greet(name) {
    alert("Welcome " + name);
  }

  return (
    <>
    <h1>passing Parameters</h1>
      <button onClick={() => greet("Gupta")}>Welcome</button>
    </>
  );
}
export default PassingParameters;