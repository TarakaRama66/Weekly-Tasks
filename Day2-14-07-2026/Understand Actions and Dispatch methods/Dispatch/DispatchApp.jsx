import { useDispatch, useSelector } from "react-redux";
import {increment,decrement,} from "./counterSlice";

function DispatchApp() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{textAlign: "center", marginTop: "250px" }}>
    <h1>Dispatch Actions</h1>
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default DispatchApp;