import { useContext } from "react";
import UserContext from "./UserContext";
function Profile(){
    const {user, setUser}= useContext(UserContext);
    return(
        <div>
            <h3>User:{user}</h3>
            <button onClick={()=>setUser("Gupta")}>Change User</button>
        </div>
    )
}
export default Profile;