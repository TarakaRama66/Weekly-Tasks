import { useEffect } from "react";

function Resize() {

  useEffect(() => {

    function handleResize() {
      console.log("Width:", window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("Resize Event Removed");
    };

  }, []);

  return (
    <h2>Resize Your Browser Window</h2>
  );
}

export default Resize;