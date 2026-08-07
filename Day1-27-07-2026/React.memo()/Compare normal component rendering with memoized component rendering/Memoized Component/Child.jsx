import React from "react";

function Child() {
  console.log("Child Rendered");

  return <h2>Child Component</h2>;
}

export default React.memo(Child);