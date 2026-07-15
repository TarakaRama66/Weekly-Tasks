import { useReducer } from "react";

const initialState = {
  cart: [],
};
function reducer(state, action) {
  switch (action.type) {
    case "Add_Item":
      return {cart: [...state.cart, action.payload],};
    case "Remove_Item":
      return {cart: state.cart.filter((item) => item.id !== action.payload),};
    case "Clear_Cart":
      return {cart: [],};
    default:
      return state;
  }
}
function Cart() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addItem = () => {
    dispatch({
      type: "Add_Item",
      payload: {
        id: Date.now(),
        name: "Redmi12 5g",
        price: 25000,
      },
    });
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <button onClick={addItem}>Add Item</button>
      <button onClick={() => dispatch({ type: "Clear_Cart" })}>Clear Cart</button>
      {state.cart.length === 0 ? (
        <p>Cart is Empty</p>
      ) : (
        state.cart.map((item) => (
          <div key={item.id}>
            <p>{item.name} - ₹{item.price}</p>

            <button onClick={() =>dispatch({type: "Remove_Item",payload: item.id,})}>Remove</button>
            <hr />
          </div>
        ))
      )}
    </div>
  );
}
export default Cart;