function UserCard({ user, onEdit, onDelete }) {
  return (
    <article className="user-card">
      <div className="user-avatar">
        {user.name.charAt(0).toUpperCase()}
      </div>
 
      <div className="user-info">
        <h3>{user.name}</h3>
        <p>{user.email}</p>
        <span className={`role-badge ${user.role.toLowerCase()}`}>
          {user.role}
        </span>
      </div>
 
      <div className="user-actions">
        <button
          className="edit-btn"
          onClick={() => onEdit(user)}
        >
          Edit
        </button>
 
        <button
          className="delete-btn"
          onClick={() => onDelete(user.id)}
        >
          Delete
        </button>
      </div>
    </article>
  );
}
 
export default UserCard;