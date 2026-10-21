function EmployeeProfile({ name, role, department }) {
  return (
    <div>
      <h2>Employee Profile</h2>
      <p>Name: {name}</p>
      <p>Role: {role}</p>
      <p>Department: {department}</p>
    </div>
  );
}

export default EmployeeProfile;