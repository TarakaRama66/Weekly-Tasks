import React from "react";

function Button({ onClick }) {

  console.log("Button Rendered");

  return (
    <button onClick={onClick}>
      Place Order
    </button>
  );
}
export default React.memo(Button);

// React.memo + useCallback