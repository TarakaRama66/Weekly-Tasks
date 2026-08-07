import UserContext from "./UserContext";
import Header from "./Header";
import Profile from "./Profile";
function Provider(){
    const userName = "Tarak";
    return(
        <UserContext.Provider
        value={userName}>
            <h1>Create a Context using create Context()</h1>
            <Header/>
            <Profile/>
        </UserContext.Provider>
    )
}
export default Provider;