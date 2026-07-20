import { useState } from "react";

function ShowHide() {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <div>
      <h1>2.Show and hide components dynamically.</h1>
      <h2>Frequently Asked Question</h2>

      <h3>What is React?</h3>

      <button onClick={() => setShowAnswer(!showAnswer)}>{showAnswer ? "Hide Answer" : "Show Answer"}</button>
      
      {showAnswer && (<p>React is a JavaScript library used for building user interfaces.</p>)}
    </div>
  );
}
export default ShowHide;