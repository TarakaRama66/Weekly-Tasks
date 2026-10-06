import { useState } from "react";
import Form from "./Form";
 
function Task4App() {
  const [candidates, setCandidates] = useState([]);
 
  const receiveFeedback = (candidateData) => {
    const newCandidate = {id: Date.now(),...candidateData,};
    setCandidates((prev) => [...prev, newCandidate]);
  };
  return (
    <div>
      <h1>HR Interview Dashboard</h1>
      <Form sendFeedback={receiveFeedback} />
      <hr></hr>
      <h2>Candidate Reports</h2>
      {candidates.length === 0 ? (
        <h3>No Interview Records Found</h3>
      ) : (
        candidates.map((candidate) => (
          <div
            key={candidate.id}
            style={{
              border: "2px solid black",
              padding: "15px",
              marginBottom: "10px",
            }}>
            <h3>{candidate.name}</h3>
            <p>
              Position: {candidate.position}
            </p>
            <p>
              Experience: {candidate.experience}
            </p>
            <p>
              Score: {candidate.score}/100
            </p>
            <p>Result:{candidate.score >= 70 ? " Selected" : " Rejected"}</p>
          </div>
        ))
      )}
    </div>
  );
}
export default Task4App;