import { useParams } from "react-router-dom";

function Products() {
  const { id } = useParams();

  return (
    <>
      <h2>Product Details</h2>
      <p>Product ID: {id}</p>
    </>
  );
}

export default Products;