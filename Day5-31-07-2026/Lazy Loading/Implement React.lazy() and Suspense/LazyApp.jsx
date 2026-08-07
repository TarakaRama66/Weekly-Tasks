import { useState, lazy, Suspense } from "react";
import Home from "./Home";

// Lazy load About component
const About = lazy(() => import("./About"));

function LazyApp() {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <>
      <Home/>
      <hr></hr>
      <button onClick={() => setShowAbout(true)}>Load About Component</button>
      {showAbout && (
        <Suspense fallback={<h3>Loading About...</h3>}>
          <About />
        </Suspense>
      )}
    </>
  );
}
export default LazyApp;