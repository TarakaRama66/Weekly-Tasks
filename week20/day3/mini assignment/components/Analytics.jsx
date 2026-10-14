
import { memo, useMemo } from "react";

const Analytics = memo(function Analytics({ employees }) {
  console.log("Analytics rendered");

  const departmentStats = useMemo(() => {
    const stats = {};

    employees.forEach((employee) => {
      if (!stats[employee.department]) {
        stats[employee.department] = {
          count: 0,
          totalSalary: 0,
        };
      }

      stats[employee.department].count += 1;
      stats[employee.department].totalSalary += employee.salary;
    });

    return Object.entries(stats).map(([department, values]) => ({
      department,
      count: values.count,
      averageSalary: values.totalSalary / values.count,
    }));
  }, [employees]);

  return (
    <section>
      <h2>Department Analytics</h2>

      {departmentStats.map((stat) => (
        <article key={stat.department}>
          <h3>{stat.department}</h3>
          <p>Employees: {stat.count}</p>
          <p>
            Average Salary: ₹
            {Math.round(stat.averageSalary).toLocaleString("en-IN")}
          </p>
        </article>
      ))}
    </section>
  );
});

export default Analytics;
