import { useContext } from "react";
import AuthContext from "./AuthContext";

function Login() {
  const { isLoggedIn, login, logout } = useContext(AuthContext);

  return (
    <div>
        <h1>User authentication using Context API</h1>
        <button onClick={isLoggedIn ? logout : login}>{isLoggedIn ? "Logout" : "Login"}</button>
    </div>
  );
}

export default Login;