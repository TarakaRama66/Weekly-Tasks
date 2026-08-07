import ProductCard from "./ProductCard";
import products from "./Products";

function ProductList() {
  return (
    <>
      <h2>Products</h2>

      {products.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </>
  );
}

export default ProductList;