import { Component, useState } from "react";
// Error Boundary Component
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  // Update state when a child component throws an error
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }

  // Log the error for debugging
  componentDidCatch(error, errorInfo) {
    console.error("Application Error:", error);
    console.error("Error Details:", errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Something went wrong!</h2>
          <p>The employee section could not be displayed.</p>
          <button onClick={() => window.location.reload()}>
            Reload Application
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Employee List Component
function EmployeeList({ employees }) {
  return (
    <div>
      <h2>Employee List</h2>

      {employees.map((employee) => (
        <p key={employee.id}>
          {employee.name} - {employee.role}
        </p>
      ))}
    </div>
  );
}

//Component to demonstrate an error
function EmployeeSection({ employees, showError }) {
  if (showError) {
    throw new Error("Demo employee section error");
  }

  return <EmployeeList employees={employees} />;
}

// Main Application
function Task7App() {
  const [showError, setShowError] = useState(false);

  const employees = [
    { id: 1, name: "Tarak", role: "Frontend Developer" },
    { id: 2, name: "Ramya", role: "React Developer" },
    { id: 3, name: "Soumya", role: "UI Developer" },
  ];

  return (
    <div>
      <h1>Employee Management Dashboard</h1>

      <p>
        Click the button below to test the Error Boundary.
      </p>

      <button onClick={() => setShowError(true)}>
        Test Error Boundary
      </button>

      <hr />

      <ErrorBoundary>
        <EmployeeSection
          employees={employees}
          showError={showError}
        />
      </ErrorBoundary>
    </div>
  );
}

export default Task7App;