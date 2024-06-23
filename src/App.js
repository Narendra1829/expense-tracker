import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import ContextMenu from "./components/ContextMenu";
import { useState } from "react";
import ExpenseData from "./components/ExpenseData";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const [expenseData, setExpenseData] = useLocalStorage(
    "formData",
    ExpenseData
  );
  const [editingRowId, setEditingRowId] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    amount: "",
    id: crypto.randomUUID(),
  });

  return (
    <div className="App">
      <main>
        <h1>Track Your Expense</h1>
        <div className="expense-tracker">
          <ExpenseForm
            expenseData={expenseData}
            setExpenseData={setExpenseData}
            formData={formData}
            setFormData={setFormData}
            editingRowId={editingRowId}
            setEditingRowId={setEditingRowId}
          />
          <ExpenseTable
            expenseData={expenseData}
            setExpenseData={setExpenseData}
            formData={formData}
            setFormData={setFormData}
            setEditingRowId={setEditingRowId}
          />
          <ContextMenu />
        </div>
      </main>
    </div>
  );
}

export default App;
