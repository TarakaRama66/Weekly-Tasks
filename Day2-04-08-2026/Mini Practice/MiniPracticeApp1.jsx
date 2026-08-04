import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";

import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Products from "./Products";
import ProductDetails from "./ProductDetails";
import Login from "./Login";
import Dashboard from "./Dashboard";
import ProtectedRoute from "./ProtectedRoute";
import NotFound from "./NotFound";

function MiniPracticeApp1() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      <header>
        <h2>React Router Demo</h2>

        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/about">About</Link> |{" "}
          <Link to="/services">Services</Link> |{" "}
          <Link to="/contact">Contact</Link> |{" "}
          <Link to="/products">Products</Link> |{" "}
          <Link to="/dashboard">Dashboard</Link> |{" "}
          <Link to="/login">Login</Link>
        </nav>
      </header>

      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />

        {/* Dynamic Routing */}
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />

        {/* Login */}
        <Route
          path="/login"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />

        {/* Protected Route */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default MiniPracticeApp1;