import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const handleLogin = () => {alert("Login Successful");
    // Navigate to Home page
    navigate("/");
  };
  return (
    <>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </>
  );
}
export default Login;