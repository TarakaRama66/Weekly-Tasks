import { useState } from "react";
 
function MainApp() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Laptop",
      category: "Electronics",
      price: 65000,
      stock: true,
      description: "High performance laptop"
    },
    {
      id: 2,
      name: "Headphones",
      category: "Accessories",
      price: 3000,
      stock: false,
      description: "Wireless Bluetooth Headphones"
    }
  ]);

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    description: "",
    stock: true
  });
  const [editId, setEditId] = useState(null);
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };
  const addOrUpdateProduct = () => {
    if (
      !formData.name ||
      !formData.category ||
      !formData.price
    ) {
      alert("Fill all fields");
      return;
    }
    if (editId) {
      setProducts(
        products.map((product) =>
          product.id === editId
            ? {
                ...formData,
                id: editId,
                price: Number(formData.price)
              }
            : product
        )
      );
      setEditId(null);
    } else {
      const newProduct = {
        ...formData,
        id: Date.now(),
        price: Number(formData.price)
      };
      setProducts([...products, newProduct]);
    }
    setFormData({
      name: "",
      category: "",
      price: "",
      description: "",
      stock: true
    });
  };
  const deleteProduct = (id) => {
    setProducts(
      products.filter(
        (product) => product.id !== id
      )
    );
    if (
      selectedProduct &&
      selectedProduct.id === id
    ) {
      setSelectedProduct(null);
    }
  };
  const editProduct = (product) => {
    setFormData(product);
    setEditId(product.id);
  };
  return (
    <div className="container">
      <h1>Product Management System</h1>
 
      <div className="form-section">
        <h2>
          {editId
            ? "Edit Product"
            : "Add Product"}
        </h2>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}/>
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}/>
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}/>
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}/>
        <label>
          <input
            type="checkbox"
            name="stock"
            checked={formData.stock}
            onChange={handleChange}/>
          In Stock
        </label>
        <button onClick={addOrUpdateProduct}>
          {editId ? "Update Product" : "Add Product"}
        </button>
      </div>
      <div className="product-list">
        <h2>Product List</h2>
        {products.map((product) => (
          <div
            className="card"
            key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.category}</p>
            <button onClick={() =>setSelectedProduct(product)}>View</button>

            <button onClick={() =>editProduct(product)}>Edit</button>

            <button className="delete"onClick={() =>deleteProduct(product.id)}>Delete</button>
          </div>
        ))}
      </div>
      <div className="details">
        <h2>Product Details</h2>
        {selectedProduct ? (
          <div className="detail-card">
            <h3>{selectedProduct.name}</h3>
            <p>
              Category: {selectedProduct.category}
            </p>
            <p>
              Price: ₹{selectedProduct.price}
            </p>
            <p>
              Description: {selectedProduct.description}
            </p>
            {selectedProduct.stock ? (
              <p className="stock">
                Available
              </p>
            ) : (
              <p className="outstock">
                Out Of Stock
              </p>
            )}
          </div>
        ) : (
          <h3>Select Product</h3>
        )}
      </div>
    </div>
  );
}
export default MainApp;