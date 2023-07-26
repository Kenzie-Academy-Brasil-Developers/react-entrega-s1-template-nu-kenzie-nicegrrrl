import { useState } from "react";
import { Input } from "../Input/input";
import { Select } from "../Select/select";
import styles from "./style.module.scss";

export const Form = ({ addTransaction }) => {
  const [description, setDescription] = useState("");
  const [money, setMoney] = useState("");
  const [category, setCategory] = useState("");

  const submit = (event) => {
    event.preventDefault();
    // console.log({ description, money, category });
    addTransaction({ description, money, category });
    setDescription("");
    setMoney("");
    setCategory("");
  };

  return (
    <form className={styles.form} onSubmit={submit}>
      <div className={styles.flexBox}>
        <Input
          label="Descrição"
          id="description"
          type="text"
          placeholder="Digite aqui sua descrição"
          value={description}
          setValue={setDescription}
          span="Ex: Compra de roupas"
        />
        <Input
          label="Valor (R$)"
          id="money"
          type="number"
          placeholder="Digite aqui o valor"
          value={money}
          setValue={setMoney}
          span="Ex: 1"
        />
        <Select
          label="Tipo de valor"
          id="category"
          value={category}
          setValue={setCategory}
        />
        <button type="submit" className="button__default">
          Inserir valor
        </button>
      </div>
    </form>
  );
};
