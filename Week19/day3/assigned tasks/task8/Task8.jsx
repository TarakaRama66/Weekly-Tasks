import { useState, useEffect } from "react";
 
function Task8() {
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchCount, setSearchCount] = useState(0);
 
  const products = [
    "Laptop",
    "Mobile",
    "Smart Watch",
    "Keyboard",
    "Mouse",
    "Monitor",
    "Headphones",
    "Camera"
  ];
 
  useEffect(() => {
    const result = products.filter((product) =>
      product
        .toLowerCase()
        .includes(search.toLowerCase())
    );
 
    setFilteredProducts(result);
 
    if (search.trim()) {
      setSearchCount((prev) => prev + 1);
    }
 
    console.log("Search Changed");
  }, [search]);
 
  return (
    <div className="container">
      <h1>Product Search Dashboard</h1>
 
      <input
        type="text"
        placeholder="Search Product..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />
 
      <h3>
        Search Executions: {searchCount}
      </h3>
 
      <div className="products">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <div
              className="card"
              key={index}
            >
              {product}
            </div>
          ))
        ) : (
          <h2>No Products Found</h2>
        )}
      </div>
    </div>
  );
}
 
export default Task8;