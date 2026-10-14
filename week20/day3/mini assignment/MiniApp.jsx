
import {
  useState,
  useMemo,
  useCallback,
  lazy,
  Suspense,
} from "react";

import { employees } from "./data";
import SummaryCards from "./components/SummaryCards";
import EmployeeTable from "./components/EmployeeTable";
import FilterControls from "./components/FilterControls";

const Analytics = lazy(() => import("./components/Analytics"));

export default function MiniApp() {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");
  const [sortBy, setSortBy] = useState("name");
  const [page, setPage] = useState("dashboard");

  console.log("App rendered");

  const filteredEmployees = useMemo(() => {
    console.log("Filtering and sorting employees");

    const normalizedSearch = search.trim().toLowerCase();

    const result = employees.filter((employee) => {
      const matchesSearch =
        employee.name.toLowerCase().includes(normalizedSearch) ||
        employee.email.toLowerCase().includes(normalizedSearch);

      const matchesDepartment =
        department === "All" ||
        employee.department === department;

      return matchesSearch && matchesDepartment;
    });

    result.sort((a, b) => {
      if (sortBy === "salary") return a.salary - b.salary;
      if (sortBy === "experience") {
        return a.experience - b.experience;
      }

      return a.name.localeCompare(b.name);
    });

    return result;
  }, [search, department, sortBy]);

  const summary = useMemo(() => {
    console.log("Calculating dashboard summary");

    const totalSalary = filteredEmployees.reduce(
      (sum, employee) => sum + employee.salary,
      0
    );

    const activeEmployees = filteredEmployees.filter(
      (employee) => employee.status === "Active"
    ).length;

    return {
      totalEmployees: filteredEmployees.length,
      averageSalary:
        filteredEmployees.length > 0
          ? totalSalary / filteredEmployees.length
          : 0,
      activeEmployees,
      totalPayroll: totalSalary,
    };
  }, [filteredEmployees]);

  const handleSearch = useCallback((value) => {
    setSearch(value);
  }, []);

  const handleDepartment = useCallback((value) => {
    setDepartment(value);
  }, []);

  const handleSort = useCallback((value) => {
    setSortBy(value);
  }, []);

  const handleReset = useCallback(() => {
    setSearch("");
    setDepartment("All");
    setSortBy("name");
  }, []);

  return (
    <main>
      <h1>Employee Analytics Dashboard</h1>

      <nav>
        <button onClick={() => setPage("dashboard")}>
          Dashboard
        </button>

        <button onClick={() => setPage("analytics")}>
          Analytics
        </button>
      </nav>

      {page === "dashboard" ? (
        <>
          <SummaryCards {...summary} />

          <FilterControls
            search={search}
            department={department}
            sortBy={sortBy}
            onSearch={handleSearch}
            onDepartment={handleDepartment}
            onSort={handleSort}
            onReset={handleReset}
          />

          <EmployeeTable employees={filteredEmployees} />
        </>
      ) : (
        <Suspense fallback={<p>Loading analytics page...</p>}>
          <Analytics employees={filteredEmployees} />
        </Suspense>
      )}
    </main>
  );
}