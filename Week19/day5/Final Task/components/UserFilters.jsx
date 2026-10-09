function UserFilters({
  search,
  setSearch,
  roleFilter,
  setRoleFilter,
}) {
  return (
    <div className="filters">
      <input
        type="search"
        placeholder="Search name or email..."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
 
      <select
        value={roleFilter}
        onChange={(event) => setRoleFilter(event.target.value)}
      >
        <option value="All">All Roles</option>
        <option value="Admin">Admin</option>
        <option value="Manager">Manager</option>
        <option value="User">User</option>
      </select>
    </div>
  );
}
 
export default UserFilters;