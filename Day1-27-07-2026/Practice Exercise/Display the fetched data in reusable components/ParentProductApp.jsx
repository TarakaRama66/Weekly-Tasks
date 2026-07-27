import { useEffect, useState } from "react";
import ProductCard from "./Card";
import { getProducts } from "./ProductService";

function ParentProductApp() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/immutability
    loadProducts();
  }, []);

  async function loadProducts() {
    const data = await getProducts();
    setProducts(data);
  }

  return (
    <div>
      <h1>Products</h1>

      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}

export default ParentProductApp;