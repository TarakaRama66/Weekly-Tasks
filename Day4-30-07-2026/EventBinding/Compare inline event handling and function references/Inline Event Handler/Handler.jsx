function Handler() {
  const products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Mobile" },
    { id: 3, name: "Watch" }
  ];
  function buyProduct(id) {
    alert("Buying Product ID: " + id);
  }
  return (
    <>
      {products.map((product) => (
        <button key={product.id}onClick={() => buyProduct(product.id)}>Buy {product.name}</button>))}
    </>
  );
}
export default Handler;