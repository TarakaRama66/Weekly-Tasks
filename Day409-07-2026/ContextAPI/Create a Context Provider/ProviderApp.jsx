import UserProvider from "./UserProvider";
import Header from "./Header";
import Profile from "./Profile";
function ProviderApp(){
    return(
        <UserProvider>
            <h1>Create a Context Provider</h1>
            <Header/>
            <Profile/>
        </UserProvider>
    )
}
export default ProviderApp;