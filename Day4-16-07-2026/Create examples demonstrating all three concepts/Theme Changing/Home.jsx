import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function Home() {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: theme,
        color: theme === "black" ? "white" : "black",
        height: "50vh",
        padding: "20px",
      }}
    >
      <h1>Context API Theme Example</h1>
      <button onClick={changeTheme}>Change Theme</button>
    </div>
  );
}

export default Home;