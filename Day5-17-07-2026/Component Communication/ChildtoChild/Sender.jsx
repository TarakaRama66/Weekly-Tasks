function Sender({ send }) {
  return (
    <button onClick={() => send("React Learning")}>
      Send
    </button>
  );
}

export default Sender;