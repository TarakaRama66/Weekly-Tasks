import { useState, lazy, Suspense } from "react";

const Chart = lazy(() => import("./Chart"));
function Dashboard() {
  const [showChart, setShowChart] = useState(false);
  return (
    <>
      <h2>Dashboard</h2>
      <button onClick={() => setShowChart(true)}>Load Chart</button>

      {showChart && (
        <Suspense fallback={<h3>Loading Chart...</h3>}>
          <Chart />
        </Suspense>
      )}
    </>
  );
}
export default Dashboard;