import React from "react";

const ContextMenu = ({
  menuPosition,
  setMenuPosition,
  setExpenseData,
  expenseData,
  rowId,
  setFormData,
  setEditingRowId,
}) => {
  if (!menuPosition?.left) return;
  return (
    <div className="context-menu" style={menuPosition}>
      <div
        onClick={() => {
          setMenuPosition({});
          const { title, category, amount } = expenseData.find(
            (data) => data.id === rowId
          );
          setFormData({
            title,
            category,
            amount,
          });
          setEditingRowId(rowId);
        }}>
        Edit
      </div>
      <div
        onClick={() => {
          console.log("delete");
          setExpenseData((prevState) =>
            prevState.filter((expense) => expense.id !== rowId)
          );
          setMenuPosition({});
        }}>
        Delete
      </div>
    </div>
  );
};

export default ContextMenu;
