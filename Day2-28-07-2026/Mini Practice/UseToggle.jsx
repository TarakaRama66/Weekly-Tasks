import { useState } from "react";

function UseToggle(initialValue = false) {
  const [show, setShow] = useState(initialValue);

  function toggle() {
    setShow(!show);
  }

  return { show, toggle };
}

export default UseToggle;