import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Members from "./Members";
import Trainers from "./Trainers";
import MemberDetails from "./MemberDetails";

function FitnessApp() {
  return (
    <div>
      <h1>Gym Management System</h1>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/members">Members</Link> |{" "}
        <Link to="/trainers">Trainers</Link>
      </nav>
      <hr></hr>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/members" element={<Members />} />
        <Route path="/trainers" element={<Trainers />} />
        {/* Dynamic Route */}
        <Route path="/member/:id" element={<MemberDetails />} />
      </Routes>
    </div>
  );
}
export default FitnessApp;