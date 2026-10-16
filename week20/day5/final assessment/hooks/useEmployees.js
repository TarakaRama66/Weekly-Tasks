import { useMemo, useState } from "react";
import { useEmployeeContext } from "../context/EmployeeContext";

export default function useEmployees() {
  const { state, dispatch } = useEmployeeContext();
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredEmployees = useMemo(() => {
    return state.employees.filter((employee) => {
      const matchesSearch =
        `${employee.name} ${employee.email} ${employee.department}`
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "All" ||
        employee.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [state.employees, search, statusFilter]);

  function addEmployee(employee) {
    dispatch({
      type: "ADD_EMPLOYEE",
      payload: {
        ...employee,
        id: crypto.randomUUID(),
      },
    });
  }

  function updateEmployee(employee) {
    dispatch({ type: "UPDATE_EMPLOYEE", payload: employee });
  }

  function deleteEmployee(id) {
    dispatch({ type: "DELETE_EMPLOYEE", payload: id });
  }

  return {
    employees: state.employees,
    filteredEmployees,
    loading: state.loading,
    error: state.error,
    search,
    setSearch,
    statusFilter,
    setStatusFilter,
    addEmployee,
    updateEmployee,
    deleteEmployee,
  };
}