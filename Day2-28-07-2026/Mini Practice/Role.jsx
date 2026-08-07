import Login from "./Login";

function Role(Component) {
  return function RoleComponent(props) {
    const role = "student";
    if (role !== "student") {
      return <Login />;
    }
    return <Component {...props} />;
  };
}
export default Role;