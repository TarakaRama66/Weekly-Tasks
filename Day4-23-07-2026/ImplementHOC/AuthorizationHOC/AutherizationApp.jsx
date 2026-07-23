import Admin from "./Admin";
import Authorization from "./Authorizaton";

const ProtectedAdmin = Authorization(Admin);

function AuthorizationApp() {
  return (
    <div>
      <ProtectedAdmin />
    </div>
  );
}

export default AuthorizationApp;