import Msg from "./Msg";
import Timestamp from "./Timestamp";

const WelcomeWithTime = Timestamp(Msg);
function TimeApp() {
  return <WelcomeWithTime />;
}

export default TimeApp;