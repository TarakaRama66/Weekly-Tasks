import { useState } from "react";
import employeesData from "./Employees";

function UseEmployees() {
  const [employees, setEmployees] = useState(employeesData);

  return { employees, setEmployees };
}

export default UseEmployees;