import { createPortal } from "react-dom";
import { useState } from "react";

function Modal({ closeModal }) {
  const [name, setName] = useState("");

  return createPortal(
    <div
      onClick={closeModal}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          width: "300px",
        }}
      >
        <h2>Student Registration</h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Form Submitted");
          }}
        >
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => {
              console.log("Typing...");
              setName(e.target.value);
            }}
            onFocus={() => console.log("Input Focused")}
            onBlur={() => console.log("Input Lost Focus")}
          />

          <br />
          <br />

          <button type="submit">
            Submit
          </button>

          <button
            type="button"
            onClick={closeModal}
            style={{ marginLeft: "10px" }}
          >
            Close
          </button>
        </form>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}

export default Modal;