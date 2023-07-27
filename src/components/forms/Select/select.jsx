export const Select = ({ children, label, id, value, setValue }) => {
  return (
    <div className="inputSection">
      <label htmlFor={id} className="bodyTypography">
        {label}
      </label>
      <select
        name={id}
        id={id}
        value={value}
        onChange={(event) => setValue(event.target.value)}
        className="input"
      >
        {children}
      </select>
    </div>
  );
};
