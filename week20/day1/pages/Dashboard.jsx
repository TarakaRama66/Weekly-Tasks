import employees from "../data/employees";

function Dashboard() {
  const departments = new Set(
    employees.map((employee) => employee.department)
  );

  const totalSalary = employees.reduce(
    (total, employee) => total + employee.salary,
    0
  );

  return (
    <section>
      <h1>Dashboard Overview</h1>

      <div className="stats">
        <article className="card">
          <h2>{employees.length}</h2>
          <p>Total Employees</p>
        </article>

        <article className="card">
          <h2>{departments.size}</h2>
          <p>Total Departments</p>
        </article>

        <article className="card">
          <h2>
            ₹{totalSalary.toLocaleString("en-IN")}
          </h2>
          <p>Combined Salary</p>
        </article>
      </div>
    </section>
  );
}

export default Dashboard;