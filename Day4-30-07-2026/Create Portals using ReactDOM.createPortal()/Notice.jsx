import { createPortal } from "react-dom";

function Notice({ close }) {
  return createPortal(
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          textAlign: "center",
          width: "300px",
        }}>
        <h2>Notice</h2>
        <p>Your profile has been updated successfully.</p>
        <button onClick={close}>Close</button>
      </div>
    </div>,
    document.getElementById("portal-root")
  );
}
export default Notice;