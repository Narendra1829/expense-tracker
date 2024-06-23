import React, { useState } from "react";
import { Input, SelectMenu, validationConfig } from "./util";

const ExpenseForm = ({
  setExpenseData,
  formData,
  setFormData,
  editingRowId,
  setEditingRowId,
}) => {
  const [errors, setErrors] = useState({});

  const isValid = (formData) => {
    const errorsData = {};
    Object.entries(formData).map(([key, value]) => {
      validationConfig[key]?.some((rule) => {
        if (rule.required && !value) {
          errorsData[key] = rule.message;
          return true;
        }
        if (rule.minLength && value.length < 3) {
          errorsData[key] = rule.message;
          return true;
        }
        if (rule.pattern && !rule.pattern.test(value)) {
          errorsData[key] = rule.message;
          return true;
        }
        return false;
      });
      return null;
    });

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
    if (Object.keys(validate).length) {
      return;
    }
    if (editingRowId) {
      setExpenseData((prevState) =>
        prevState.map((prevExpense) => {
          if (prevExpense.id === editingRowId) {
            return { ...formData, id: editingRowId };
          }
          return prevExpense;
        })
      );
      setEditingRowId("");
      setFormData({
        title: "",
        category: "",
        amount: "",
      });
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
      <SelectMenu
        value={formData?.category}
        onChange={handleOnChange}
        error={errors?.category}
        label="Category"
        name="category"
        id="category"
        options={["Grocery", "Clothes", "Bills", "Education", "Medicine"]}
        defaultOption="Select Category"
      />
      <Input
        className="input-container"
        id="amount"
        label="Amount"
        name="amount"
        value={formData?.amount}
        onChange={handleOnChange}
        error={errors?.amount}
        placeholder="Enter amount"
      />
      <button className="add-btn">{editingRowId ? "Save" : "Add"}</button>
    </form>
  );
};

export default ExpenseForm;
