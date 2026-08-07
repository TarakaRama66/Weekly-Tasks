function DevServer() {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "40px"
      }}
    >
      <h1>Webpack Dev Server</h1>

      <h2>React Application</h2>

      <p>
        Browser refreshes automatically whenever you save the file.
      </p>
      <button
        onClick={() => alert("Webpack Dev Server is Running")}>Click Me</button>
    </div>
  );
}

export default DevServer;