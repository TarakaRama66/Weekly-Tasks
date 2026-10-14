import { EmployeeProvider } from "./context/EmployeeContext";
import Navbar from "./components/Navbar";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeList from "./components/EmployeeList";

function Task4App() {
  return (
    <EmployeeProvider>
      <main>
        <Navbar />
        <EmployeeForm />
        <EmployeeList />
      </main>
    </EmployeeProvider>
  );
}

export default Task4App;