export default function Employees() {
  const employees = [
    { id: 1, name: "Taraka", role: "Frontend Developer" },
    { id: 2, name: "Rahul", role: "Backend Developer" },
    { id: 3, name: "Priya", role: "UI Developer" },
  ];

  return (
    <section>
      <h2>Employees</h2>

      {employees.map((employee) => (
        <p key={employee.id}>
          {employee.name} - {employee.role}
        </p>
      ))}
    </section>
  );
}