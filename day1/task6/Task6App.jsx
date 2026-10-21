
import EmployeeProfile from "./components/EmployeeProfile";
import EmployeeSkills from "./components/EmployeeSkills";
import EmployeeStatus from "./components/EmployeeStatus";

function Task6App() {
  const employee = {
    name: "Tarak",
    role: "Frontend Developer",
    department: "Development",
    skills: ["HTML", "JavaScript", "React"],
    isActive: true
  };

  return (
    <div>
      <h1>NYB Infotech Employee Dashboard</h1>

      <EmployeeProfile
        name={employee.name}
        role={employee.role}
        department={employee.department}
      />

      <EmployeeSkills skills={employee.skills} />

      <EmployeeStatus isActive={employee.isActive} />
    </div>
  );
}

export default Task6App;