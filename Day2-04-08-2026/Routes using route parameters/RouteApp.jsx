import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";

function RouteApp() {
  return (
    <>
      <h1>Dynamic Routing Example</h1>

      <Link to="/">Home</Link> |{" "}
      <Link to="/products/101">Product 101</Link> |{" "}
      <Link to="/products/202">Product 202</Link> |{" "}
      <Link to="/products/303">Product 303</Link>

      <hr></hr>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Products />} />
      </Routes>
    </>
  );
}

export default RouteApp;