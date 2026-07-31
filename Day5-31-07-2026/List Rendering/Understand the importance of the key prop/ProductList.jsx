function ProductList() {
  const products = [
    { id: 1, name: "Laptop", price: 150000 },
    { id: 2, name: "Phone", price: 40000 },
    { id: 3, name: "Headphones", price: 2000 }
  ];

  return (
    <>
      <h2>Products List</h2>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>₹{product.price}</p>
        </div>
      ))}
    </>
  );
}
export default ProductList;