import { useState } from "react";
 
function Day4Task6() {
  const [search, setSearch] = useState("");
  const products = [
    {
      id: 1,
      name: "Laptop",
      category: "Electronics"
    },
    {
      id: 2,
      name: "Phone",
      category: "Electronics"
    },
    {
      id: 3,
      name: "Shoes",
      category: "Fashion"
    },
    {
      id: 4,
      name: "Watch",
      category: "Accessories"
    }
  ];
  const filteredProducts = products.filter(
    (product) =>
      product.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      product.category
        .toLowerCase()
        .includes(search.toLowerCase())
  );
  return (
    <div>
      <h1>Product Search</h1>
      <input
        type="text"
        placeholder="Search Product"
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }/>
      {filteredProducts.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.category}</p>
        </div>
      ))}
    </div>
  );
}
export default Day4Task6;