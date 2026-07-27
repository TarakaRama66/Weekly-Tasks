import { useEffect, useState } from "react";

function FetchLoadingError() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    getProducts();
  }, []);
  if (loading) return <h2>Loading...</h2>;
  if (error) return <h2>{error}</h2>;
  return (
    <>
      <h2>Products</h2>
      {products.map((item) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </>
  );
}
export default FetchLoadingError;