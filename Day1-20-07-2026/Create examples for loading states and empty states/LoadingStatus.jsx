import { useState, useEffect } from "react";

function LoadingStatus() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {setTimeout(() => {setLoading(false);}, 3000);}, []);
  return (
    <div>
      <h1>Student Portal</h1>
      {loading ? (
        <h2>Loading Student Details...</h2>
      ) : (
        <h2>Student Details Loaded Successfully</h2>
      )}
    </div>
  );
}

export default LoadingStatus;