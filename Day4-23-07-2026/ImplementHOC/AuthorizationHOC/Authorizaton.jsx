function Authorization(Component) {
  return function AuthorizationComponent(props) {
    const userRole = "Admin";

    if (userRole !== "Admin") {
      return <h2>Access Denied</h2>;
    }

    return <Component {...props} />;
  };
}

export default Authorization;