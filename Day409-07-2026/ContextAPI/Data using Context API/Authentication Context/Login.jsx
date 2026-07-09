import { useContext } from "react";
import AuthContext from "./AuthContext";

function Login() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  return (
    <>
    <h1>Authentication Context</h1>
      <h2>{isLoggedIn ? "Welcome User" : "Please Login"}</h2>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </>
  );
}
export default Login;