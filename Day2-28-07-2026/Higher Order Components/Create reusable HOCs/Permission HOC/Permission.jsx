function Permission(Component) {
  return function PermissionComponent(props) {
    const role = "Admin";
    if (role !== "Admin") {
      return <h2>Access Denied</h2>;
    }
    return <Component {...props} />;
  };
}
export default Permission;