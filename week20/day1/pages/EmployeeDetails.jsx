import {
  Link,
  useNavigate,
  useParams
} from "react-router";

import employees from "../data/employees";

function EmployeeDetails() {
  const { employeeId } = useParams();
  const navigate = useNavigate();

  const employee = employees.find(
    (item) => item.id === Number(employeeId)
  );

  if (!employee) {
    return (
      <section>
        <h1>Employee Not Found</h1>

        <button
          onClick={() =>
            navigate("/dashboard/employees")
          }
        >
          Back to Employees
        </button>
      </section>
    );
  }

  return (
    <section>
      <h1>Employee Details</h1>

      <article className="card">
        <p>
          <strong>ID:</strong> {employee.id}
        </p>

        <p>
          <strong>Name:</strong> {employee.name}
        </p>

        <p>
          <strong>Role:</strong> {employee.role}
        </p>

        <p>
          <strong>Department:</strong>{" "}
          {employee.department}
        </p>

        <p>
          <strong>Email:</strong> {employee.email}
        </p>

        <p>
          <strong>Salary:</strong> ₹
          {employee.salary.toLocaleString("en-IN")}
        </p>
      </article>

      <Link
        to="/dashboard/employees"
        className="button"
      >
        Back to Employees
      </Link>
    </section>
  );
}

export default EmployeeDetails;