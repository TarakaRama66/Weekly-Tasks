import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Cart from "./Cart";

function MainApp() {
  return (
    <>
      <h1>Shopping App</h1>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/cart">Cart</Link>
      </nav>
      <hr></hr>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}
export default MainApp;