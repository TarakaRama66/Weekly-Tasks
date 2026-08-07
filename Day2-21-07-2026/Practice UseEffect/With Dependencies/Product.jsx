import { useState, useEffect } from "react";

function Product() {
  const [search, setSearch] = useState("");

  useEffect(() => {
    console.log("Searching for:", search);
  }, [search]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search Product"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <h3>Search: {search}</h3>
    </div>
  );
}

export default Product;