import { useReducer } from "react"

// Initial State
const initialState = {
  cart: [],
};

// Reducer Function
function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        cart: [...state.cart, action.payload],
      };
    case "REMOVE_ITEM":
      return {
        cart: state.cart.filter(
          (item) => item.id !== action.payload
        ),
      };
    case "CLEAR_CART":
      return {
        cart: [],
      };

    default:
      return state;
  }
}

function ActionTypes() {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Add Item
  const addItem = () => {
    const newItem = {
      id: Date.now(),
      name: "Laptop",
      price: 50000,
    };

    dispatch({type: "ADD_ITEM",payload: newItem,});
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <button onClick={addItem}>Add Item</button>
      <button onClick={() =>dispatch({type: "CLEAR_CART",})}>Clear Cart</button>
      <h2>Cart Items</h2>
      {state.cart.length === 0 ? (
        <p>Cart is Empty</p>
      ) : (state.cart.map((item) => (
          <div key={item.id}>
            <p>{item.name} - ₹{item.price}</p>
            <button onClick={() =>dispatch({type: "REMOVE_ITEM",payload: item.id,})}>Remove</button>
          </div>
        ))
      )}
    </div>
  );
}
export default ActionTypes;