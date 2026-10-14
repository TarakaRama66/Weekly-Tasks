import { useReducer, useState } from "react";

// Initial state
const initialState = {
  products: [
    {
      id: 1,
      name: "Laptop",
      price: 55000,
      stock: 10,
      category: "Electronics",
    },
    {
      id: 2,
      name: "Headphones",
      price: 2000,
      stock: 25,
      category: "Accessories",
    },
  ],
};

// Reducer function
function productReducer(state, action) {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        products: [
          ...state.products,
          action.payload,
        ],
      };

    case "UPDATE_PRODUCT":
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.id
            ? { ...product, ...action.payload }
            : product
        ),
      };

    case "DELETE_PRODUCT":
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };

    case "UPDATE_STOCK":
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.id
            ? {
                ...product,
                stock: action.payload.stock,
              }
            : product
        ),
      };

    case "RESET":
      return initialState;

    default:
      return state;
  }
}

function Task6App() {
  const [state, dispatch] = useReducer(
    productReducer,
    initialState
  );

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("Electronics");
  const [search, setSearch] = useState("");

  // Add product
  function handleAdd(event) {
    event.preventDefault();

    const numericPrice = Number(price);
    const numericStock = Number(stock);

    if (
      !name.trim() ||
      price.trim() === "" ||
      stock.trim() === "" ||
      !Number.isFinite(numericPrice) ||
      !Number.isInteger(numericStock) ||
      numericPrice < 0 ||
      numericStock < 0
    ) {
      alert("Enter valid product details.");
      return;
    }

    dispatch({
      type: "ADD_PRODUCT",
      payload: {
        id: Date.now(),
        name: name.trim(),
        price: numericPrice,
        stock: numericStock,
        category,
      },
    });

    setName("");
    setPrice("");
    setStock("");
    setCategory("Electronics");
  }

  // Update product name and price
  function handleUpdate(product) {
    const newName = prompt(
      "Enter product name:",
      product.name
    );

    if (newName === null || !newName.trim()) {
      return;
    }

    const newPrice = prompt(
      "Enter product price:",
      String(product.price)
    );

    if (newPrice === null || newPrice.trim() === "") {
      return;
    }

    const numericPrice = Number(newPrice);

    if (!Number.isFinite(numericPrice) || numericPrice < 0) {
      alert("Enter a valid price.");
      return;
    }

    dispatch({
      type: "UPDATE_PRODUCT",
      payload: {
        id: product.id,
        name: newName.trim(),
        price: numericPrice,
      },
    });
  }

  // Increase or decrease stock
  function changeStock(product, amount) {
    const newStock = product.stock + amount;

    if (newStock < 0) {
      alert("Stock cannot be negative.");
      return;
    }

    dispatch({
      type: "UPDATE_STOCK",
      payload: {
        id: product.id,
        stock: newStock,
      },
    });
  }

  // Delete product
  function handleDelete(id) {
    dispatch({
      type: "DELETE_PRODUCT",
      payload: id,
    });
  }

  // Search products
  const filteredProducts = state.products.filter(
    (product) =>
      product.name.toLowerCase().includes(
        search.trim().toLowerCase()
      )
  );

  // Derived inventory value
  const inventoryValue = state.products.reduce(
    (total, product) =>
      total + product.price * product.stock,
    0
  );

  return (
    <main>
      <h1>Product Inventory Management</h1>

      <section>
        <h2>Inventory Summary</h2>
        <p>Total Products: {state.products.length}</p>
        <p>
          Total Inventory Value: ₹
          {inventoryValue.toLocaleString("en-IN")}
        </p>
      </section>

      <hr />

      <section>
        <h2>Add Product</h2>

        <form onSubmit={handleAdd}>
          <input
            placeholder="Product name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />

          <input
            type="number"
            min="0"
            placeholder="Price"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            required
          />

          <input
            type="number"
            min="0"
            step="1"
            placeholder="Stock quantity"
            value={stock}
            onChange={(event) => setStock(event.target.value)}
            required
          />

          <select
            value={category}
            onChange={(event) =>
              setCategory(event.target.value)
            }
          >
            <option value="Electronics">Electronics</option>
            <option value="Accessories">Accessories</option>
            <option value="Furniture">Furniture</option>
          </select>

          <button type="submit">Add Product</button>
        </form>
      </section>

      <hr />

      <section>
        <h2>Product List</h2>

        <input
          type="search"
          placeholder="Search products"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        {filteredProducts.length === 0 ? (
          <p>No products found.</p>
        ) : (
          filteredProducts.map((product) => (
            <article key={product.id}>
              <h3>{product.name}</h3>
              <p>Category: {product.category}</p>
              <p>Price: ₹{product.price.toLocaleString("en-IN")}</p>
              <p>Stock: {product.stock}</p>

              <button
                type="button"
                onClick={() => handleUpdate(product)}
              >
                Update
              </button>

              <button
                type="button"
                onClick={() => changeStock(product, 1)}
              >
                Increase Stock
              </button>

              <button
                type="button"
                onClick={() => changeStock(product, -1)}
              >
                Decrease Stock
              </button>

              <button
                type="button"
                onClick={() => handleDelete(product.id)}
              >
                Delete
              </button>

              <hr />
            </article>
          ))
        )}
      </section>

      <button
        type="button"
        onClick={() => {
          dispatch({ type: "RESET" });
          setSearch("");
        }}
      >
        Reset Inventory
      </button>
    </main>
  );
}

export default Task6App;