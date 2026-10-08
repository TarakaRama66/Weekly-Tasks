import { useState } from "react";
 
function Day4Task7() {
  const [category, setCategory] = useState("All");
  const products = [
    {
      id: 1,
      name: "Laptop",
      category: "Electronics",
      price: 70000
    },
    {
      id: 2,
      name: "Phone",
      category: "Electronics",
      price: 25000
    },
    {
      id: 3,
      name: "Shoes",
      category: "Fashion",
      price: 4000
    },
    {
      id: 4,
      name: "Watch",
      category: "Accessories",
      price: 6000
    }
  ];
 
  const filteredProducts =
    category === "All"
      ? products
      : products.filter(
          (product) =>
            product.category === category
        );
 
  return (
    <div>
      <button onClick={() =>setCategory("All")}>All</button>

      <button onClick={() =>setCategory("Electronics")}>Electronics</button>

      <button onClick={() =>setCategory("Fashion")}>Fashion</button>

      <button onClick={() =>setCategory("Accessories")}>Accessories</button>

      {filteredProducts.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.category}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
}
export default Day4Task7;