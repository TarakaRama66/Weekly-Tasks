import Header from "./Header";
import Footer from "./Footer";
import Dashboard from "./Dashboard";
import { ThemeProvider } from "./ThemeContext";
import { UserProvider } from "./UserContext";
function MainApp() {
  return (
    <ThemeProvider>
      <UserProvider>
        <Header />
        <Dashboard />
        <Footer />
      </UserProvider>
    </ThemeProvider>
  );
}
export default MainApp;