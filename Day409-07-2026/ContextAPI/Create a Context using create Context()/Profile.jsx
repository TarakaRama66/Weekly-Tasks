import {useContext} from "react"
import UserContext from "./UserContext";
function Profile(){
    const user= useContext(UserContext);
    return <h2>User Name: {user}</h2>
}
export default Profile;