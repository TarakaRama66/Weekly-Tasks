import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();

  return (
    <>
      <h2>Product Details</h2>

      <h3>Product ID : {id}</h3>
    </>
  );
}

export default ProductDetails;