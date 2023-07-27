import styles from "./style.module.css";

export const Input = ({
  label,
  id,
  type,
  placeholder,
  required,
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
        className={`bodyTypography input ${styles.inputNumber}`}
        type={type}
        name={id}
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={(event) => setValue(event.target.value)}
        required={required}
      />
      <span className="bodyTypography spanInput">{span}</span>
    </div>
  );
};
