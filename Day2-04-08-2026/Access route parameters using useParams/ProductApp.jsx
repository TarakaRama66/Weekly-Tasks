import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Product from "./Product";

function ProductApp() {
  return (
    <>
      <h1>React Dynamic Routing</h1>

      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/products/101">Product 101</Link> |{" "}
        <Link to="/products/102">Product 102</Link> |{" "}
        <Link to="/products/103">Product 103</Link>
      </nav>

      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<Product />} />

        {/* 404 Page */}
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Routes>
    </>
  );
}

export default ProductApp;