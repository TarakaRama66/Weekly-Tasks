import { useState, memo } from "react";

const Header = memo(function Header() {
  console.log("Header rendered");

  return <h2>React Performance Demo</h2>;
});

const CounterDisplay = memo(function CounterDisplay({ count }) {
  console.log("CounterDisplay rendered");

  return <h3>Count: {count}</h3>;
});

const UserProfile = memo(function UserProfile({ name }) {
  console.log("UserProfile rendered");

  return <h3>User: {name}</h3>;
});

function Task1() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Taraka");

  console.log("App rendered");

  return (
    <div>
      <Header />

      <CounterDisplay count={count} />

      <UserProfile name={name} />

      <button onClick={() => setCount(count + 1)}>
        Increment Count
      </button>

      <button onClick={() => setName("Rahul")}>
        Change Name
      </button>
    </div>
  );
}

export default Task1;