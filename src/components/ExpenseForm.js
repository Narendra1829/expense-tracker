import React, { useState } from "react";
import Input from "./Input";

const ExpenseForm = ({ setExpenseData }) => {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    amount: "",
    id: crypto.randomUUID(),
  });

  const isValid = (formData) => {
    const errorsData = {};
    if (!formData.title) {
      errorsData.title = "Title is required";
    }
    if (!formData.category) {
      errorsData.category = "Category is required";
    }
    if (!formData.amount) {
      errorsData.amount = "Amount is required";
    }
    setErrors(errorsData);
    return errorsData;
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setErrors({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validate = isValid(formData);
    console.log("validate", Object.keys(validate).length);
    if (Object.keys(validate).length) {
      return;
    }
    setExpenseData((prevState) => [
      ...prevState,
      { ...formData, id: crypto.randomUUID() },
    ]);
    setFormData({
      title: "",
      category: "",
      amount: "",
      id: "",
    });
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <Input
        className="input-container"
        id="title"
        label="Title"
        name="title"
        value={formData?.title}
        onChange={handleOnChange}
        error={errors?.title}
        placeholder="Enter title"
      />
      <div className="input-container">
        <label htmlFor="category">Category</label>
        <select
          className="category"
          name="category"
          value={formData?.category}
          onChange={(e) => {
            handleOnChange(e);
          }}>
          <option hidden value="">
            Select Category
          </option>
          <option value="Grocery">Grocery</option>
          <option value="Clothes">Clothes</option>
          <option value="Bills">Bills</option>
          <option value="Education">Education</option>
          <option value="Medicine">Medicine</option>
        </select>
        <p className="error">{errors?.category}</p>
      </div>
      <Input
        className="input-container"
        id="amount"
        label="Amount"
        name="Amount"
        value={formData?.amount}
        onChange={handleOnChange}
        error={errors?.amount}
        placeholder="Enter amount"
      />
      <button className="add-btn">Add</button>
    </form>
  );
};

export default ExpenseForm;
