import { useEffect, useState } from "react";
 
function Task8() {
  const [count, setCount] = useState(0);
  console.log("Component Rendered");
  useEffect(() => {
    console.log("useEffect Executed");
    return () => {
      console.log("Cleanup Function Executed");
    };
  }, []);
  const increment = () => {
    setCount(count + 1);
  };
  const users = [
    {
      id: 1,
      name: "Taraka Ram"
    },
    {
      id: 2,
      name: "Frontend Developer"
    }
  ];
  return (
    <>
      <h1>React Strict Mode Example</h1>
      <hr></hr>
      <h2>Counter : {count}</h2>
      <button onClick={increment}>Increment</button>
      <hr></hr>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}
          </li>
        ))}
      </ul>
      <hr></hr>
      <p>
        Open Browser Console to observe
        Strict Mode behavior.
      </p>
    </>
  );
}
export default Task8;