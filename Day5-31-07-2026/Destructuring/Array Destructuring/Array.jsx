function Array() {
  const fruits = ["Apple", "Grapes", "Guava"];
  const [first, second, third] = fruits;
  return (
    <>
    <h2>Basic Array Destructuring</h2>
      <h2>{first}</h2>
      <h2>{second}</h2>
      <h2>{third}</h2>
    </>
  );
}
export default Array;