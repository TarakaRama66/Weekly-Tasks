function Logical() {
  const products = [
    { id: 1, name: "Mouse", stock: true },
    { id: 2, name: "Phone", stock: false },
    { id: 3, name: "Keyboard", stock: true },
    { id: 4, name: "EarPhones", stock: true},
  ];

  return (
    <>
      <h2>Available Products Using Logical And</h2>
      {products.map((product) => (
        <div key={product.id}>
          <p>{product.name}</p>
          {product.stock && <span>In Stock</span>}
        </div>
      ))}
    </>
  );
}
export default Logical;