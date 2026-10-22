import { useEffect, useState } from "react";
 
function Task1() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Rahul");
  const [seconds, setSeconds] = useState(0);
  const [mountMessage, setMountMessage] = useState(
    "Waiting for component initialization..."
  );
 
  // Scenario 1: No dependency array
  // Runs after every committed render.
  useEffect(() => {
    document.title = `Count: ${count}`;
  });
 
  // Scenario 2: Empty dependency array
  // Runs on mount, with an extra development cycle
  // possible when Strict Mode is enabled.
  useEffect(() => {
    setMountMessage("Component mounted successfully");
 
    return () => {
      document.title = "React useEffect Practice";
    };
  }, []);
 
  // Scenario 3: Dependency array with count
  // Runs on mount and whenever count changes.
  useEffect(() => {
    // This effect synchronizes the page title with count.
    document.title = `Current count: ${count}`;
  }, [count]);
 
  // Scenario 4: Timer with cleanup
  useEffect(() => {
    const timerId = setInterval(() => {
      setSeconds(previous => previous + 1);
    }, 1000);
 
    return () => {
      clearInterval(timerId);
    };
  }, []);
 
  // Scenario 5: Multiple dependencies
  useEffect(() => {
    // This effect runs when name or count changes.
    // No additional state update is needed here.
  }, [name, count]);
 
  return (
    <div>
      <h1>React useEffect Practice</h1>
 
      <h2>1. No Dependency Array</h2>
      <p>Count: {count}</p>
      <p>
        The effect runs after every committed render.
      </p>
 
      <h2>2. Empty Dependency Array</h2>
      <p>{mountMessage}</p>
 
      <h2>3. Single Dependency</h2>
      <button onClick={() => setCount(c => c + 1)}>
        Increase Count
      </button>
 
      <h2>4. Multiple Dependencies</h2>
      <p>Name: {name}</p>
      <button onClick={() => setName("Priya")}>
        Change Name
      </button>
 
      <h2>5. Timer and Cleanup</h2>
      <p>Seconds elapsed: {seconds}</p>
      <p>The interval is cleared when the component unmounts.</p>
 
      <button onClick={() => setCount(0)}>
        Reset Count
      </button>
    </div>
  );
}
 
export default Task1;