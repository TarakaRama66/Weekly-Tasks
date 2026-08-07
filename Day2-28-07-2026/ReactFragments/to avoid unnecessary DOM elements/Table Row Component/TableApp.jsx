import TableRow from "./TableRow";

function TableApp() {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Role</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <TableRow />
        </tr>
      </tbody>
    </table>
  );
}

export default TableApp;