import { Option } from "../Option/option";

export const Select = ({ label, id }) => {
  return (
    <div className="inputSection">
      <label htmlFor={id} className="bodyTypography">
        {label}
      </label>
      <select name={id} id={id}>
        <Option value="input" text="Entrada" />
        <Option value="output" text="Saída" />
      </select>
    </div>
  );
};
