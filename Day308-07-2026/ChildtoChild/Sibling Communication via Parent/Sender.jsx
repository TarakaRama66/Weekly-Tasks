function Sender({ sendMessage }) {
  return (
    <button onClick={() => sendMessage("Hello from Sender Component!")}>
      Send Message
    </button>
  );
}

export default Sender;