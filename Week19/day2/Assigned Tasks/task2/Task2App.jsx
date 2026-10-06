import EmployeeProfile from "./EmployeeProfile";
 
function Task2App() {
  const employee = {
    id: 101,
    name: "Taraka Ram",
    age: 23,
    designation: "Associate Software Engineer",
    isActive: true,
    address: {
      city: "Hyderabad",
      state: "Telangana",
      country: "India",
    },
    skills: ["HTML","CSS","JavaScript","React","Redux",],
    projects: [
      {
        id: 1,
        name: "Smart Waste Management",
        status: "Completed",
      },
      {
        id: 2,
        name: "Gym Management System",
        status: "In Progress",
      },
      {
        id: 3,
        name: "Employee Portal",
        status: "Pending",
      },
    ],
  };
  const calculateExperience = () => {
    return "1 Year";
  };
  return (
    <div>
      <h1>Employee Performance Dashboard</h1>
      <EmployeeProfile
        company="NYB Infotech"
        salary={25000}
        employee={employee}
        skills={employee.skills}
        projects={employee.projects}
        showExperience={calculateExperience}
      />
    </div>
  );
}
export default Task2App;