import { useDispatch, useSelector } from "react-redux";
import {deposit,withdraw,resetBalance,} from "./bankSlice";

function BankApp() {
  const balance = useSelector(
    (state) => state.bank.balance);
  const dispatch = useDispatch();
  return (
    <div style={{ textAlign: "center", marginTop: "250px" }}>
      <h1>Bank Account</h1>
      <h2>Balance: {balance}</h2>
      <button onClick={() => dispatch(deposit(1000))}>Deposit 1000</button>
      <button onClick={() => dispatch(withdraw(500))}>Withdraw 500</button>
      <button onClick={() => dispatch(resetBalance())}>Reset</button>
    </div>
  );
}
export default BankApp;