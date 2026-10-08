import { useState } from "react";
 
function Task4() {
  const [search, setSearch] = useState("");
 
  const products = [
    {
      id: 1,
      name: "MacBook Pro",
      category: "Laptop",
      price: 185000,
      stock: true,
    },
    {
      id: 2,
      name: "iPhone 16",
      category: "Mobile",
      price: 95000,
      stock: false,
    },
    {
      id: 3,
      name: "Samsung S25",
      category: "Mobile",
      price: 85000,
      stock: true,
    },
    {
      id: 4,
      name: "Dell XPS",
      category: "Laptop",
      price: 120000,
      stock: true,
    },
    {
      id: 5,
      name: "Apple Watch",
      category: "Watch",
      price: 45000,
      stock: false,
    },
  ];
 
  const filteredProducts = products.filter(
    (product) =>
      product.name
        .toLowerCase()
        .includes(search.toLowerCase())
  );
 
  return (
    <div className="container">
      <h1>Product Catalog</h1>
 
      <input
        type="text"
        placeholder="Search Product..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />
 
      <div className="products">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div
              className="card"
              key={product.id}
            >
              <h2>{product.name}</h2>
 
              <p>
                Category:
                {product.category}
              </p>
 
              <p>
                Price:
                ₹{product.price}
              </p>
 
              <h4>
                {product.stock
                  ? "In Stock"
                  : "Out Of Stock"}
              </h4>
            </div>
          ))
        ) : (
          <h2>No Products Found</h2>
        )}
      </div>
    </div>
  );
}
 
export default Task4;