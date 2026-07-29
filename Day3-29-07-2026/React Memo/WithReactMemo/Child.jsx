import React from "react";
function Child() {
  console.log("with ReactMemo Rendered");
  return (
    <h3>Child Component</h3>
  );
}
export default React.memo(Child);