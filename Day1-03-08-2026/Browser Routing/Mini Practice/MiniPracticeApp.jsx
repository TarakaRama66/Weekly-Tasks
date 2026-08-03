import { Routes, Route, Link } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";

function MiniPracticeApp() {
  return (
    <>
      <header>
        <h2>React Router Demo</h2>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  );
}
export default MiniPracticeApp;