function Doctor() {
  return <h2>Doctor Dashboard</h2>;
}

function Nurse() {
  return <h2>Nurse Dashboard</h2>;
}

function Receptionist() {
  return <h2>Receptionist Dashboard</h2>;
}

function Hospital() {
  const userType = "Doctor";

  return (
    <div>
      <h1>Hospital Management</h1>

      {userType === "Doctor" ? (
        <Doctor />
      ) : userType === "Nurse" ? (
        <Nurse />
      ) : (
        <Receptionist />
      )}
    </div>
  );
}

export default Hospital;