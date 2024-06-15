import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import ContextMenu from "./components/ContextMenu";
import { useState } from "react";
import ExpenseData from "./components/ExpenseData";

function App() {
  const [expenseData, setExpenseData] = useState(ExpenseData || []);

  return (
    <div className="App">
      <main>
        <h1>Track Your Expense</h1>
        <div className="expense-tracker">
          <ExpenseForm
            expenseData={expenseData}
            setExpenseData={setExpenseData}
          />
          <ExpenseTable
            expenseData={expenseData}
            setExpenseData={setExpenseData}
          />
          <ContextMenu />
        </div>
      </main>
    </div>
  );
}

export default App;
