import { Link } from "react-router-dom";

function Products() {
  return (
    <>
      <h2>Products</h2>

      <ul>
        <li>
          <Link to="/products/101">Laptop</Link>
        </li>

        <li>
          <Link to="/products/102">Mobile</Link>
        </li>

        <li>
          <Link to="/products/103">Headphones</Link>
        </li>
      </ul>
    </>
  );
}

export default Products;