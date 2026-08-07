function Card({ product }) {
  return (
    <div
      style={{border: "1px solid gray",padding: "15px",marginBottom: "15px",}}>
      <h2>{product.title}</h2>
      <img src={product.image}alt={product.title}width="120"/>
      <h3>${product.price}</h3>
      <p>{product.category}</p>
    </div>
  );
}
export default Card;