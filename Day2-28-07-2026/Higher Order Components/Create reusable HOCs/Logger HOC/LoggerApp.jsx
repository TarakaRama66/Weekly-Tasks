import Profile from "./Profile";
import Logger from "./Logger";

const LoggedProfile = Logger(Profile);

function LoggerApp() {
  return <LoggedProfile />;
}

export default LoggerApp;