function Returnnull() {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <>
    <h2>Return Null</h2>
      {numbers.map((num) => {
        if (num % 2 === 0) {
          return null;
        }
        return <p key={num}>{num}</p>;
      })}
    </>
  );
}

export default Returnnull;