import { useContext } from "react";
import UserContext from "./UserContext";
function Header(){
    const User = useContext(UserContext);
    return <h1>Welcome, {User}</h1>;
}
export default Header;