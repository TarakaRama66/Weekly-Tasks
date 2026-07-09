import Parent from "./Parent";
import { UserContext } from "./UserContext";

function MultipleApp() {
  const user = "Ram";

  return (
    <UserContext.Provider value={user}>
      <h1>Share data between multiple components without Props Drilling</h1>
      <Parent/>
    </UserContext.Provider>
  );
}
export default MultipleApp;