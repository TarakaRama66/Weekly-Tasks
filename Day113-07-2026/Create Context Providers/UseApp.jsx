import Home from "./Home";
import UserProvider from "./UserProvider";
import Header from "./Header"

function UserApp() {
  return (
    <UserProvider>
        <Home/>
        <Header/>
    </UserProvider>
  );
}

export default UserApp;