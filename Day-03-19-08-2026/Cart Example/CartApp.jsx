import { useDispatch, useSelector } from "react-redux";

import {addToCart,removeFromCart,decreaseQuantity,clearCart,} from "./cartSlice";

function CartApp() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const products = [
    {id: 1,name: "Laptop",price: 50000,},
    {id: 2,name: "Mobile Phone",price: 25000,},
    {id: 3,name: "Headphones",price: 3000,},
  ];
  const totalItems = items.reduce((total, item) => total + item.quantity,0);
  const totalPrice = items.reduce((total, item) => total + item.price * item.quantity,0);
  return (
    <div>
      <h1>Redux Toolkit Cart</h1>
      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Price: ₹{product.price}</p>
          <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
          <hr></hr>
        </div>
      ))}
      <h2>Shopping Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {items.map((item) => (
            <div key={item.id}>
              <h3>{item.name}</h3>
              <p>Price: ₹{item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Subtotal: ₹{item.price * item.quantity}</p>

              <button onClick={() =>dispatch(decreaseQuantity(item.id))}>-</button>
              <button onClick={() =>dispatch(addToCart(item))}>+</button>
              <button onClick={() =>dispatch(removeFromCart(item.id))}>Remove</button>
              <hr></hr>
            </div>
          ))}
          <h3>Total Items: {totalItems}</h3>
          <h3>Total Price: ₹{totalPrice}</h3>
          <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
        </>
      )}
    </div>
  );
}
export default CartApp;