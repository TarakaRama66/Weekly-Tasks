function ChildA({ sendData }) {
  return (
    <button onClick={() => sendData("Hello from Child A!")}>
      Send to Parent
    </button>
  );
}
export default ChildA;