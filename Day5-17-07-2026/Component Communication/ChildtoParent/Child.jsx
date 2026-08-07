function Child({ sendMessage }) {
  return (
    <button onClick={() => sendMessage("Hello Parent!")}>
      Click
    </button>
  );
}

export default Child;