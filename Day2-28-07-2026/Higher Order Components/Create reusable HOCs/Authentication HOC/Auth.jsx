import Login from "./Login";

function Auth(Component) {
  return function AuthComponent(props) {
    const isLoggedIn = true;

    if (!isLoggedIn) {
      return <Login />;
    }
    return <Component {...props} />;
  };
}
export default Auth;