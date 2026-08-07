import { useContext } from "react";
import UserContext from "./UserContext";

function Home() {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <h1>Create Context Providers and Consumers.</h1>
      <h2>Welcome {user}</h2>
      <button onClick={() => setUser("Taraka")}>
        Change User
      </button>
    </>
  );
}

export default Home;