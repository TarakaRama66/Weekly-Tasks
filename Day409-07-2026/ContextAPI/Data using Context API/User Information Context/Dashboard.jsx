import { useContext } from "react";
import UserContext from "./UserContext";

function Dashboard() {
  const user = useContext(UserContext);

  return (
    <>
      <h2>Name: {user.name}</h2>
      <h3>Email: {user.email}</h3>
    </>
  );
}

export default Dashboard;