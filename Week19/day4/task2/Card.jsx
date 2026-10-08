function Card({ product }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "15px",
        margin: "10px",
        borderRadius: "10px"
      }}
    >
      <img
        src={product.image}
        alt={product.title}
        width="100"
        height="100"
      />
      <h3>{product.title}</h3>
      <p>
        <strong>Category:</strong> {product.category}
      </p>
      <p>
        <strong>Price:</strong> ₹{product.price}
      </p>
      <p>
        <strong>Rating:</strong> {product.rating.rate}
      </p>
    </div>
  );
}
export default Card;