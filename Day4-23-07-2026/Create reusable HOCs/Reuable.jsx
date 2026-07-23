// Original Component
function Student({ name, course }) {
  return (
    <div>
      <h2>Student Details</h2>
      <p>Name : {name}</p>
      <p>Course : {course}</p>
    </div>
  );
}
// Higher Order Component
function withFeatures(Component) {
  return function EnhancedComponent(props) {
    // Common logic
    const isLoggedIn = true;
    const isLoading = false;

    // Logging
    console.log(`${Component.name} Rendered`);

    // Loading
    if (isLoading) {
      return <h2>Loading...</h2>;
    }

    // Authentication
    if (!isLoggedIn) {
      return <h2>Please Login</h2>;
    }
    return (
      <div
        style={{
          border: "1px solid black",
          padding: "15px",
          width: "300px",
          margin: "20px auto",
        }}>
        <h1>Welcome to React HOC</h1>
        <Component {...props} />
        <p>Data Loaded Successfully</p>
      </div>
    );
  };
}
// Wrap the component
const EnhancedStudent = withFeatures(Student);
// App Component
function Reusable() {
  return (
    <div>
      <EnhancedStudent
        name="Gupta"
        course="React JS"/>
    </div>
  );
}
export default Reusable;