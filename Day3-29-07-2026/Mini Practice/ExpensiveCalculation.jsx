import { useMemo } from "react";

function ExpensiveCalculation({ number }) {

  const square = useMemo(() => {
    console.log("Calculating Square...");
    return number * number;
  }, [number]);
  console.log("Expensive Component Rendered");
  return (
    <>
      <h2>Number : {number}</h2>
      <h2>Square : {square}</h2>
    </>
  );
}
export default ExpensiveCalculation;

// UseMemo