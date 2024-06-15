import React from "react";

const ExpenseForm = ({ setExpenseData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = { ...getFormData(e.target), id: crypto.randomUUID() };
    setExpenseData((prevState) => [...prevState, newExpense]);
    e.target.reset();
  };

  const getFormData = (value) => {
    const formData = new FormData(value);
    let data = {};
    for (const [key, value] of formData.entries()) {
      data[key] = value;
    }
    return data;
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="input-container">
        <label htmlFor="title">Title</label>
        <input id="title" name="title" />
      </div>
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select className="category" name="category">
          <option hidden value="">
            Select Category
          </option>
          <option value="grocery">Grocery</option>
          <option value="clothes">Clothes</option>
          <option value="bills">Bills</option>
          <option value="education">Education</option>
          <option value="medicine">Medicine</option>
        </select>
      </div>
      <div className="input-container">
        <label htmlFor="amount">Amount</label>
        <input id="amount" name="amount" />
      </div>
      <button className="add-btn">Add</button>
    </form>
  );
};

export default ExpenseForm;
