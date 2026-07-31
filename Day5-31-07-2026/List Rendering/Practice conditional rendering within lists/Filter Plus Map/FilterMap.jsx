function FilterMap() {
  const employees = [
    { id: 1, name: "Tarak", department: "Associate Software Engineer" },
    { id: 2, name: "Harsha", department: "Hr" },
    { id: 3, name: "Shiva", department: "Core" },
    { id: 4, name: "Siddu", department: "Hr"},
  ];
  return (
    <>
      <h2>Using Filter+Map()</h2>
      {employees
        .filter((emp) => emp.department === "Hr")
        .map((emp) => (<p key={emp.id}>{emp.name}</p>))}
    </>
  );
}
export default FilterMap;