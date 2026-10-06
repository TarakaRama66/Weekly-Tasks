import { useState } from "react";
 
function Task6App() {
  const [expenseName, setExpenseName] = useState("");
  const [expenseAmount, setExpenseAmount] = useState("");
 
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      title: "Internet Bill",
      amount: 1200,
    },
    {
      id: 2,
      title: "Electricity Bill",
      amount: 2500,
    },
  ]);
 
  const budget = 10000;
 
  const addExpense = () => {
    if (
      expenseName.trim() === "" ||
      expenseAmount === ""
    )
      return;
 
    const newExpense = {
      id: Date.now(),
      title: expenseName,
      amount: Number(expenseAmount),
    };
 
    setExpenses([...expenses, newExpense]);
 
    setExpenseName("");
    setExpenseAmount("");
  };
 
  const deleteExpense = (id) => {
    setExpenses(
      expenses.filter(
        (expense) => expense.id !== id
      )
    );
  };
 
  const totalSpent = expenses.reduce(
    (total, expense) =>
      total + expense.amount,
    0
  );
 
  const remainingBudget =
    budget - totalSpent;
 
  return (
    <div style={{ padding: "20px" }}>
      <h1>Smart Expense Tracker</h1>
 
      <h2>Total Budget: ₹{budget}</h2>
 
      <h2>Total Spent: ₹{totalSpent}</h2>
 
      <h2>
        Remaining Budget: ₹
        {remainingBudget}
      </h2>
 
      <h2>
        Status:
        {remainingBudget > 0
          ? " Budget Available"
          : " Budget Exceeded"}
      </h2>
 
      <hr />
 
      <input
        type="text"
        placeholder="Expense Name"
        value={expenseName}
        onChange={(e) =>
          setExpenseName(e.target.value)
        }
      />
 
      <input
        type="number"
        placeholder="Amount"
        value={expenseAmount}
        onChange={(e) =>
          setExpenseAmount(e.target.value)
        }
      />
 
      <button onClick={addExpense}>
        Add Expense
      </button>
 
      <hr />
 
      {expenses.map((expense) => (
        <div
          key={expense.id}
          style={{
            border: "1px solid black",
            margin: "10px",
            padding: "10px",
          }}
        >
          <h3>{expense.title}</h3>
 
          <p>
            Amount: ₹{expense.amount}
          </p>
 
          <button
            onClick={() =>
              deleteExpense(expense.id)
            }
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
 
export default Task6App;