import { useUser } from "./UserContext";

function UserCard() {
  const { user } = useUser();

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "15px",
        marginTop: "20px",
      }}>
      <h2>User Information</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Role:</strong> {user.role}</p>
      <p><strong>Department:</strong> {user.department}</p>
    </div>
  );
}

export default UserCard;