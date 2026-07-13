import ThemeProvider from "./ThemeProvider";
import Navbar from "./Navbar";
import Home from "./Home";

function ThemeApp() {
  return (
    <ThemeProvider>
      <Navbar/>
      <Home/>
    </ThemeProvider>
  );
}

export default ThemeApp;