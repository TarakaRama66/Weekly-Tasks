function Webpack() {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "40px"
      }}
    >
      <h1>Webpack Fundamentals</h1>

      <table
        border="1"
        cellPadding="10"
        style={{
          margin: "20px auto",
          borderCollapse: "collapse"
        }}
      >
        <thead>
          <tr>
            <th>Feature</th>
            <th>Description</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Entry</td>
            <td>Starting point of the application.</td>
          </tr>

          <tr>
            <td>Output</td>
            <td>Generated bundled JavaScript file.</td>
          </tr>

          <tr>
            <td>Loader</td>
            <td>Converts JSX into browser-compatible JavaScript.</td>
          </tr>

          <tr>
            <td>Plugin</td>
            <td>Generates HTML automatically.</td>
          </tr>

          <tr>
            <td>Dev Server</td>
            <td>Runs the project with Hot Reload.</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Webpack;