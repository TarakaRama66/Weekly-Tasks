function IfElse() {
  const users = [
    { id: 1, name: "Tarak", role: "Admin" },
    { id: 2, name: "Gupta", role: "User" },
  ];

  const renderUser = (user) => {
    if (user.role === "Admin") {
      return <h3 key={user.id}>{user.name} - Admin</h3>;
    } else {
      return <p key={user.id}>{user.name} - User</p>;
    }
  };
  return (
    <>
    <h2>Using IfElse</h2>
      {users.map(renderUser)}
    </>
  );
}
export default IfElse;