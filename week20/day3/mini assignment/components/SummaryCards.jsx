
import { memo } from "react";

const SummaryCards = memo(function SummaryCards({
  totalEmployees,
  averageSalary,
  activeEmployees,
  totalPayroll,
}) {
  console.log("SummaryCards rendered");

  return (
    <section>
      <h2>Employee Summary</h2>

      <p>Total Employees: {totalEmployees}</p>

      <p>
        Average Salary: ₹
        {Math.round(averageSalary).toLocaleString("en-IN")}
      </p>

      <p>Active Employees: {activeEmployees}</p>

      <p>
        Monthly Payroll: ₹
        {totalPayroll.toLocaleString("en-IN")}
      </p>
    </section>
  );
});

export default SummaryCards;
