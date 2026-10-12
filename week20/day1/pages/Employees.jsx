import { Link, useSearchParams } from "react-router";

import employees from "../data/employees";

function Employees() {
  const [searchParams, setSearchParams] =
    useSearchParams();

  const search = searchParams.get("search") || "";

  const department =
    searchParams.get("department") || "all";

  const filteredEmployees = employees.filter(
    (employee) => {
      const matchesSearch =
        employee.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        employee.role
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesDepartment =
        department === "all" ||
        employee.department === department;

      return matchesSearch && matchesDepartment;
    }
  );

  function updateParams(key, value) {
    const nextParams = new URLSearchParams(searchParams);

    if (!value || value === "all") {
      nextParams.delete(key);
    } else {
      nextParams.set(key, value);
    }

    setSearchParams(nextParams);
  }

  return (
    <section>
      <h1>Employee Management</h1>

      <div className="filters">
        <input
          type="search"
          placeholder="Search by name or role"
          value={search}
          onChange={(event) =>
            updateParams("search", event.target.value)
          }
        />

        <select
          value={department}
          onChange={(event) =>
            updateParams(
              "department",
              event.target.value
            )
          }
        >
          <option value="all">
            All Departments
          </option>

          <option value="Engineering">
            Engineering
          </option>

          <option value="Design">
            Design
          </option>

          <option value="Human Resources">
            Human Resources
          </option>
        </select>
      </div>

      <p>
        Matching employees: {filteredEmployees.length}
      </p>

      <div className="employee-grid">
        {filteredEmployees.map((employee) => (
          <article
            className="card"
            key={employee.id}
          >
            <h2>{employee.name}</h2>

            <p>{employee.role}</p>

            <p>{employee.department}</p>

            <Link
              to={`/dashboard/employees/${employee.id}`}
              className="button"
            >
              View Details
            </Link>
          </article>
        ))}
      </div>

      {filteredEmployees.length === 0 && (
        <p>No matching employees found.</p>
      )}
    </section>
  );
}

export default Employees;