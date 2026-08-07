import { useDispatch, useSelector } from "react-redux";
import {increment,decrement,reset,} from "./counterSlice";

function AppStore() {
  const count = useSelector(
    (state) => state.counter.value
  );
  const dispatch = useDispatch();
  return (
    <div style={{textAlign: "center",marginTop: "250px",}}>
      <h1>Redux Toolkit Counter</h1>
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}

export default AppStore;