import { Routes, Route, Link } from "react-router-dom";

import Home from "./Home";
import Movies from "./Movies";
import Booking from "./Booking";
import Profile from "./Profile";
import NotFound from "./Notfound";

function MovieApp() {
  return (
    <>
      <h1>MovieZone</h1>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/movies">Movies</Link> |{" "}
        <Link to="/booking">Book Ticket</Link> |{" "}
        <Link to="/profile">Profile</Link>
      </nav>
      <hr></hr>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
export default MovieApp;