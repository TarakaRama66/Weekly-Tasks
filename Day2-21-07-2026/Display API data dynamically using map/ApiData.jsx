import { useEffect, useState } from "react";

function ApiData() {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    try {
      const response = await fetch("https://fakestoreapi.com/products");

      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }

      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {getProducts(); }, []);

  return (
    <div>
      {products.map((product) => (
        <h3 key={product.id}>{product.title}</h3>
      ))}
    </div>
  );
}

export default ApiData;