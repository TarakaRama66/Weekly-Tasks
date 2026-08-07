import { useNavigate } from "react-router-dom";

function Login({ setIsAuthenticated }) {
  const navigate = useNavigate();
  const handleLogin = () => {setIsAuthenticated(true);
    navigate("/dashboard");
  };
  return (
    <>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </>
  );
}
export default Login;