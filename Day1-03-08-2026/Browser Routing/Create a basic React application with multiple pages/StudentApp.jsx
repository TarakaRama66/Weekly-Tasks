import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./Home";
import Students from "./Students";
import Courses from "./Courses";
import Contact from "./Contact";

function App() {
  return (
    <BrowserRouter>

      <h2>Student Portal</h2>

      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/students">Students</Link> |{" "}
        <Link to="/courses">Courses</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>

      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<Students />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;