 
import { useMemo, useState } from "react";
import { useAppContext } from "./context/AppContext";
 
import Header from "./components/Header";
import ThemeButton from "./components/ThemeButton";
import Stats from "./components/Stats";
import UserForm from "./components/UserForm";
import UserFilters from "./components/UserFilters";
import UserList from "./components/UserList";
 
function FinalApp() {
  const {
    users,
    addUser,
    updateUser,
    deleteUser,
    theme,
    loading,
    error,
  } = useAppContext();
 
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("All");
  const [editingUser, setEditingUser] = useState(null);
 
  function handleSave(user) {
    if (editingUser) {
      updateUser({ ...editingUser, ...user });
      setEditingUser(null);
    } else {
      addUser(user);
    }
  }
 
  function handleDelete(id) {
    if (window.confirm("Are you sure you want to delete this user?")) {
      deleteUser(id);
 
      if (editingUser?.id === id) {
        setEditingUser(null);
      }
    }
  }
 
  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const query = search.toLowerCase();
 
      const matchesSearch =
        user.name.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query);
 
      const matchesRole =
        roleFilter === "All" || user.role === roleFilter;
 
      return matchesSearch && matchesRole;
    });
  }, [users, search, roleFilter]);
 
  return (
    <main className={`app ${theme}`}>
      <Header />
 
      <div className="toolbar">
        <p>Manage, search, and organize your team.</p>
        <ThemeButton />
      </div>
 
      <Stats users={users} />
 
      <div className="content-grid">
        <UserForm
          onSave={handleSave}
          editingUser={editingUser}
          onCancel={() => setEditingUser(null)}
        />
 
        <section className="panel">
          <div className="list-heading">
            <div>
              <h2>Team Members</h2>
              <p>{filteredUsers.length} users found</p>
            </div>
          </div>
 
          <UserFilters
            search={search}
            setSearch={setSearch}
            roleFilter={roleFilter}
            setRoleFilter={setRoleFilter}
          />
 
          {error && users.length > 0 && (
            <p className="error">
              API warning: {error}. Showing saved users instead.
            </p>
          )}
 
          <UserList
            users={filteredUsers}
            loading={loading && users.length === 0}
            error={error}
            onEdit={setEditingUser}
            onDelete={handleDelete}
          />
        </section>
      </div>
      <footer className="footer">
        React User Management • Built with reusable components
      </footer>
    </main>
  );
}
export default FinalApp;