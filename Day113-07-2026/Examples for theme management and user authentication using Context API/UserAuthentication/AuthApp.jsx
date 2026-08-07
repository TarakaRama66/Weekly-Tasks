import AuthProvider from "./AuthProvider";
import Login from "./Login";
import Dashboard from "./Dashboard";

function AuthApp() {
  return (
    <AuthProvider>
      <Login />
      <Dashboard />
    </AuthProvider>
  );
}

export default AuthApp;