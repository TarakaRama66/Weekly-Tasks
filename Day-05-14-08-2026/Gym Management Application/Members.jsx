import { Link } from "react-router-dom";

function Members() {
  const members = [
    { id: 1, name: "Tarak" },
    { id: 2, name: "Tilak" },
    { id: 3, name: "Gupta" },
    { id: 4, name: "Siddu"},
    { id: 5, name: "Sanju"},
  ];

  return (
    <div>
      <h2>Gym Members</h2>

      {members.map((member) => (
        <div key={member.id}>
          <Link to={`/member/${member.id}`}>
            {member.name}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Members;