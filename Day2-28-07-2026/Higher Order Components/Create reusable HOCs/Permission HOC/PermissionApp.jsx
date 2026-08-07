import Admin from "./Admin";
import Permission from "./Permission";

const ProtectedAdmin = Permission(Admin);

function PermissionApp() {
  return <ProtectedAdmin />;
}

export default PermissionApp;