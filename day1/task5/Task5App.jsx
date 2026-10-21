import EmployeeCard from "./components/EmployeeCard";

function Task5App() {
  const employeeDetails = {
    id: 101,
    department: "Frontend Development"
  };
  const employeeSkills = ["HTML", "JavaScript", "React"];
  return (
    <div>
      <h1>NYB Infotech Employee Portal</h1>
      <EmployeeCard
        name="Tarak"
        age={23}
        salary={35000}
        skills={employeeSkills}
        employee={employeeDetails}
        isActive={true}
      />
      <EmployeeCard
        name="Nada"
        age={25}
        salary={42000}
        skills={["React", "Node.js", "MongoDB"]}
        employee={{ id: 102, department: "Full Stack Development" }}
        isActive={false}
      />
    </div>
  );
}
export default Task5App;