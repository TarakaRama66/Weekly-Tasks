import { useState } from "react";
import AuthContext from "./AuthContext";
import Login from "./Login";

function AuthApp() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      <Login />
    </AuthContext.Provider>
  );
}

export default AuthApp;