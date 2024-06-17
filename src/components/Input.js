import React from "react";

const Input = ({
  className,
  id,
  name,
  value,
  onChange,
  error,
  label,
  placeholder,
}) => {
  return (
    <div className={className}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      <p className="error">{error}</p>
    </div>
  );
};

export default Input;
