import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
function PassingApp() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}
export default PassingApp;