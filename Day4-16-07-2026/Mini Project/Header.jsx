import { useContext } from "react";
import { useSelector } from "react-redux";
import ThemeContext from "./ThemeContext";

function Header() {
  const { theme, changeTheme } = useContext(ThemeContext);
  const students = useSelector((state) => state.student.students);
  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#e3f2fd" : "#1e1e1e",
        color: theme === "light" ? "black" : "white",
        padding: "20px",
        textAlign: "center",
      }}>
      <h1>Student Portal</h1>
      <h3>Total Students : {students.length}</h3>
      <button onClick={changeTheme}>Change Theme</button>
    </div>
  );
}
export default Header;