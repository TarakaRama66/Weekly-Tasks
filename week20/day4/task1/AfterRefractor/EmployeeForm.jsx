function EmployeeForm({ onAddEmployee }) {
  function handleSubmit(e) {e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name").trim();
    const role = formData.get("role").trim();

    if (!name || !role) {
      alert("Please fill in all fields");
      return;
    }

    onAddEmployee({ name, role });
    e.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        type="text"
        placeholder="Employee name"
        required
      />

      <input
        name="role"
        type="text"
        placeholder="Employee role"
        required
      />

      <button type="submit">Add Employee</button>
    </form>
  );
}

export default EmployeeForm;