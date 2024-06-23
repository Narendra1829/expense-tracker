export const Input = ({
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

export const SelectMenu = ({
  value,
  onChange,
  error,
  label,
  name,
  id,
  options,
  defaultOption,
}) => {
  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <select
        className="category"
        name={name}
        value={value}
        onChange={onChange}>
        {defaultOption && (
          <option hidden value="">
            {defaultOption}
          </option>
        )}
        {options.map((option, index) => {
          return (
            <option key={index} value={option}>
              {option}
            </option>
          );
        })}
      </select>
      <p className="error">{error}</p>
    </div>
  );
};

export const validationConfig = {
  title: [
    { required: true, message: "Title is required" },
    { minLength: 3, message: "Minimum 3 characters required" },
  ],
  category: [{ required: true, message: "Category is required" }],
  amount: [
    { required: true, message: "Amount is required" },
    {
      pattern: /^[0-9]+(\.[0-9]{1,2})?$/,
      message: "Valid amount is required",
    },
  ],
};
