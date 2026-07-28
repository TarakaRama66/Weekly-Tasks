function ProductList({ products }) {
  return (
    <>
      <h1>Products</h1>
      {
        products.map(product=>(
          <div key={product.id}>
            <h3>{product.title}</h3>
            <p>Price : ${product.price}</p>
          </div>
        ))
      }
    </>
  );
}
export default ProductList;