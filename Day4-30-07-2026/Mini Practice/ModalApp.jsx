import { useState } from "react";
import Modal from "./Modal";

function ModalApp() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div style={{ padding: "30px" }}>
      <h1>React Portal Example</h1>

      <button onClick={() => setShowModal(true)}>
        Open Modal
      </button>

      {showModal && (
        <Modal
          closeModal={() => setShowModal(false)}
        />
      )}
    </div>
  );
}

export default ModalApp;