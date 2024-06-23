import React, { useState } from "react";
import { useFilter } from "../hooks/useFilter";
import ContextMenu from "./ContextMenu";

const ExpenseTable = ({
  expenseData,
  setExpenseData,
  formData,
  setFormData,
  setEditingRowId,
}) => {
  const [menuPosition, setMenuPosition] = useState({});
  const [rowId, setRowId] = useState("");
  const [filteredResult, setQuery] = useFilter(
    expenseData,
    (data) => data.category
  );

  const total = filteredResult.reduce(
    (acc, curr) => acc + parseFloat(curr.amount),
    0
  );

  return (
    <>
      <ContextMenu
        menuPosition={menuPosition}
        setMenuPosition={setMenuPosition}
        setExpenseData={setExpenseData}
        expenseData={expenseData}
        rowId={rowId}
        setFormData={setFormData}
        setEditingRowId={setEditingRowId}
      />
      <table className="expense-table" onClick={() => setMenuPosition({})}>
        <thead>
          <tr>
            <th>Title</th>
            <th>
              <select
                onChange={(e) => {
                  setQuery(e.target.value.toLowerCase());
                }}>
                <option value="">All Items</option>
                <option value="grocery">Grocery</option>
                <option value="clothes">Clothes</option>
                <option value="bills">Bills</option>
                <option value="education">Education</option>
                <option value="medicine">Medicine</option>
              </select>
            </th>
            <th className="amount-column">
              <div>
                <span>Amount</span>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          {}
          {(filteredResult || [])?.map((result) => {
            const { title, id, category, amount } = result;
            return (
              <tr
                key={id}
                onContextMenu={(e) => {
                  e.preventDefault();
                  setMenuPosition({ left: e.clientX + 5, top: e.clientY + 5 });
                  setRowId(id);
                }}>
                <td>{title}</td>
                <td>{category} </td>
                <td>₹{amount} </td>
              </tr>
            );
          })}
          <tr>
            <th>Total</th>
            <th></th>
            <th>₹ {total}</th>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default ExpenseTable;
