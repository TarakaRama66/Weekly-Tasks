import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function Home() {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <h2>Home Page</h2>
      <p>Theme Applied: {theme}</p>
    </div>
  );
}

export default Home;