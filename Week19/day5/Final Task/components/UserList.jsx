import UserCard from "./UserCard";
 
function UserList({ users, loading, error, onEdit, onDelete }) {
  if (loading) {
    return <p className="status-message">Loading users...</p>;
  }
 
  if (error && users.length === 0) {
    return (
      <div className="status-message error">
        <p>Unable to load users: {error}</p>
        <p>You can still add users using the form.</p>
      </div>
    );
  }
 
  if (users.length === 0) {
    return (
      <p className="status-message">
        No users found. Add your first user!
      </p>
    );
  }
 
  return (
    <div className="user-grid">
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
 
export default UserList;