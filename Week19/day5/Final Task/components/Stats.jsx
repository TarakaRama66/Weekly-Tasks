function Stats({ users }) {
  const total = users.length;
  const admins = users.filter(
    (user) => user.role === "Admin"
  ).length;
  const managers = users.filter(
    (user) => user.role === "Manager"
  ).length;
  const regularUsers = users.filter(
    (user) => user.role === "User"
  ).length;
 
  const cards = [
    { title: "Total Users", value: total, icon: "👥" },
    { title: "Admins", value: admins, icon: "🛡️" },
    { title: "Managers", value: managers, icon: "💼" },
    { title: "Regular Users", value: regularUsers, icon: "👤" },
  ];
 
  return (
    <div className="stats-grid">
      {cards.map((card) => (
        <div className="stat-card" key={card.title}>
          <span className="stat-icon">{card.icon}</span>
          <p>{card.title}</p>
          <h2>{card.value}</h2>
        </div>
      ))}
    </div>
  );
}
 
export default Stats;