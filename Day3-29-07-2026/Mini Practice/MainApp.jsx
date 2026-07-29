import { useState, useMemo, useCallback } from "react";
import Counter from "./Counter";
import ExpensiveCalculation from "./ExpensiveCalculation";
import Button from "./Button";

function MainApp() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(5);

  // useMemo
  const total = useMemo(() => {
    console.log("Calculating Total...");
    let sum = 0;
    for (let i = 0; i < 100; i++) {
      sum += i;
    }
    return sum;
  }, []);
  // useCallback
  const handleClick = useCallback(() => {
    console.log("Order Button Clicked");
  }, []);
  return (
    <>
      <h1>React Performance Optimization</h1>
      <Counter
        count={count}
        setCount={setCount}/>
      <hr></hr>
      <ExpensiveCalculation
        number={number}/>
      <h3>Total : {total}</h3>

      <button onClick={() => setNumber(number + 1)}>Change Number</button>

      <hr></hr>
      <Button onClick={handleClick} />
    </>
  );
}
export default MainApp;