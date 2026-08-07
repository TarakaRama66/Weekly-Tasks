import { useContext } from "react";
import UserContext from "./UserContext";
function Header(){
    const{user}=useContext(UserContext);
    return <h2>Welcome, {user}</h2>
}
export default Header;