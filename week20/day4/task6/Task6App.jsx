import { useEffect, useState } from "react";

//Reusable Data-Fetching Hook
function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(url, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message || "Something went wrong");
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    fetchData();

    return () => controller.abort();
  }, [url]);

  return { data, loading, error };
}

//Main Application
function Task6App() {
  const {
    data: employees,
    loading,
    error,
  } = useFetch("https://jsonplaceholder.typicode.com/users");

  const [search, setSearch] = useState("");

  // 3. Search employees
  const filteredEmployees = employees.filter((employee) =>
    `${employee.name} ${employee.email}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Employee Management Dashboard</h1>

      <p>Employee data is loaded from a public API.</p>

      <input
        type="text"
        placeholder="Search by name or email"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />

      {loading && <p>Loading employees...</p>}

      {error && (
        <div>
          <p role="alert">Error: {error}</p>
        </div>
      )}

      {!loading && !error && (
        <>
          <h2>Employee List</h2>

          <p>Employees displayed: {filteredEmployees.length}</p>

          {filteredEmployees.length === 0 ? (
            <p>No employees found.</p>
          ) : (
            <ul>
              {filteredEmployees.map((employee) => (
                <li key={employee.id}>
                  <strong>{employee.name}</strong>
                  <p>Email: {employee.email}</p>
                  <p>Company: {employee.company.name}</p>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
}

export default Task6App;