import Counter from "./components/Counter";
import Header from "./components/Header";
import ThemeButton from "./components/ThemeButton";
import UserList from "./components/UserList";
import { AppProvider } from "./context/AppContext";
 
function Day5App() {
  return (
    <AppProvider>
        <Header/>
        <hr></hr>
        <Counter/>
        <hr></hr>
        <ThemeButton/>
        <hr></hr>
        <UserList/>
    </AppProvider>
  );
}
export default Day5App;