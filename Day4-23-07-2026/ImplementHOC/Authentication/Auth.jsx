function Auth(Component) {
  return function AuthComponent(props) {
    const isLoggedIn = false;

    if (!isLoggedIn) {
      return <h2>Please Login</h2>;
    }

    return <Component {...props} />;
  };
}
export default Auth;