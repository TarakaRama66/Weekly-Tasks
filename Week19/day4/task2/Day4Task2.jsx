import { useEffect, useState } from "react";
import { fetchProducts } from "./Service";
import Card from "./Card";
 
function Day4Task2() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
 
  useEffect(() => {
    loadProducts();
  }, []);
  const loadProducts = async () => {
    try {
      const data = await fetchProducts();
      setProducts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  if (loading) {
    return <h1>Loading Products...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  return (
    <div>
      <h1>Product Catalog</h1>
      {products.map((product) => (
        <Card
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}
export default Day4Task2;