function ButtonChild({ sendData }) {
  return (
    <>
    <h1>Create examples using button clicks and form inputs to send data to the Parent</h1>
    <button onClick={() => sendData("Hello from Child!")}>
      Send Message
    </button>
    </>
  );
}

export default ButtonChild;