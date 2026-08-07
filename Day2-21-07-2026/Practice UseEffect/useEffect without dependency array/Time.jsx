import { useState, useEffect } from "react";

function Time() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    console.log("Current Time:", time);
  });

  return (
    <div>
      <h2>{time}</h2>

      <button
        onClick={() =>
          setTime(new Date().toLocaleTimeString())
        }
      >
        Refresh Time
      </button>
    </div>
  );
}

export default Time;