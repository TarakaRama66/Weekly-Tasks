function List({ products }) {
  return (
    <div>
      <h2>Product List</h2>

      {products.map((product) => (
        <div
          key={product.id}
          style={{
            border: "1px solid gray",
            margin: "10px",
            padding: "10px",
          }}
        >
          <h3>{product.title}</h3>
          <p>₹ {product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default List;