import { useDashboard } from "../context/DashboardContext";

function Dashboard() {
  const { state, dispatch } = useDashboard();

  const totalSalary = state.employees.reduce(
    (total, employee) => total + employee.salary,
    0
  );

  return (
    <section>
      <h1>Admin Dashboard</h1>

      <p>Total Employees: {state.employees.length}</p>

      <p>Total Departments: {state.departments.length}</p>

      <p>
        Total Salary: ₹
        {totalSalary.toLocaleString("en-IN")}
      </p>

      {state.loading && <p>Loading...</p>}

      {state.error && (
        <div>
          <p role="alert">{state.error}</p>

          <button
            onClick={() =>
              dispatch({ type: "CLEAR_ERROR" })
            }
          >
            Dismiss Error
          </button>
        </div>
      )}

      <h2>Notifications</h2>

      {state.notifications.length === 0 ? (
        <p>No notifications.</p>
      ) : (
        <ul>
          {state.notifications.map((notification) => (
            <li key={notification.id}>
              {notification.message}
            </li>
          ))}
        </ul>
      )}

      <button
        onClick={() =>
          dispatch({ type: "CLEAR_NOTIFICATIONS" })
        }
      >
        Clear Notifications
      </button>

      <hr />
    </section>
  );
}

export default Dashboard;