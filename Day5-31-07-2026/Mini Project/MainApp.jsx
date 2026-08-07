import { lazy, Suspense } from "react";
import Dashboard from "./Dashboard";

const About = lazy(() => import("./About"));

function MainApp() {
  return (
    <>
      <Dashboard />
      <Suspense fallback={<h2>Loading...</h2>}>
        <About />
      </Suspense>
    </>
  );
}
export default MainApp;