import { useEffect, useState } from "react";
 
function Day4Task5() {
  const [products, setProducts] = useState([]);
  useEffect(() => { loadProducts();}, []);
  const loadProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    const filteredProducts = data.filter(
      (product) => product.price > 50000
    );
    setProducts(filteredProducts);
  };
  return (
    <div>
      <h1>Premium Products</h1>
      {products.length === 0 ? (
        <div>
          <h2>No Premium Products Found</h2>
          <p>Try changing your search or filter criteria.</p>
        </div>
      ) : (
        products.map((product) => (
          <div key={product.id}>
            <h3>{product.title}</h3>
            <p>₹ {product.price}</p>
          </div>
        ))
      )}
    </div>
  );
}
export default Day4Task5;