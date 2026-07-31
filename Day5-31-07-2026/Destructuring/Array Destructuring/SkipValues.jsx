function SkipValues() {
  const colors = ["Blue", "White", "Black"];

  const [first, , third] = colors;
  return (
    <>
    <h2>Skip Array Values</h2>
      <h2>{first}</h2>
      <h2>{third}</h2>
    </>
  );
}
export default SkipValues;