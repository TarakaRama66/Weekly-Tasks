function RestOperator() {
  const numbers = [10, 20, 30, 40, 50];
  const [first, ...remaining] = numbers;
  return (
    <>
    <h2>Rest Operator</h2>
      <h2>First: {first}</h2>
      <h3>Remaining Numbers</h3>
      {remaining.map((num, index) => (<p key={index}>{num}</p>))}
    </>
  );
}
export default RestOperator;