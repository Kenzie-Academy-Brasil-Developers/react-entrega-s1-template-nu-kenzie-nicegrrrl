export const Input = ({
  label,
  id,
  type,
  placeholder,
  value,
  setValue,
  span,
}) => {
  return (
    <div className="inputSection">
      <label htmlFor={id} className="bodyTypography">
        {label}
      </label>
      <input
        className="bodyTypography input"
        type={type}
        name={id}
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={(event) => setValue(event.target.value)}
      />
      <span className="bodyTypography spanInput">{span}</span>
    </div>
  );
};
