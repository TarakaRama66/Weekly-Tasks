import React from "react";

const Child = React.memo(({ name, onGreet }) => {
  console.log("Child Component Rendering");

  return (
    <>
      <h2>{name}</h2>

      <button onClick={onGreet}>
        Greet
      </button>
    </>
  );
});

export default Child;