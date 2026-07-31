import { useMemo, useState, useCallback } from "react";
import EmployeeList from "./EmployeeList";
import SearchBar from "./SearchBar";
import Modal from "./Modal";
import UseEmployees from "./UseEmployees";
function Dashboard() {
  const { employees } = UseEmployees();
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(false);
  const filteredEmployees = useMemo(() => {
    return employees.filter((emp) =>
      emp.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, employees]);
  const totalSalary = useMemo(() => {
    return filteredEmployees.reduce((sum, emp) => sum + emp.salary, 0);
  }, [filteredEmployees]);
  const openModal = useCallback(() => {
    setShow(true);
  }, []);
  return (
    <>
      <SearchBar
        search={search}
        setSearch={setSearch}/>
      <button onClick={openModal}>Add Employee</button>
      <h2>Total Salary : {totalSalary}</h2>
      <EmployeeList employees={filteredEmployees} />
      {show && (<Modal close={() => setShow(false)}/>)}
    </>
  );
}
export default Dashboard;