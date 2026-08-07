import { useEffect } from "react";

function Emptydependency() {

  useEffect(() => {
    alert("Welcome to Online Banking");
  }, []);

  return (
    <h1>Online Banking</h1>
  );
}

export default Emptydependency;