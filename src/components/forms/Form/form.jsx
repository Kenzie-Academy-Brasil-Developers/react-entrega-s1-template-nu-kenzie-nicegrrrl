import { useState } from "react";
import { Input } from "../Input/input";
import { Select } from "../Select/select";
import styles from "./style.module.scss";

export const Form = ({ addTransaction }) => {
  const [description, setDescription] = useState("");
  const [money, setMoney] = useState("");
  const [category, setCategory] = useState("entrada");

  const submit = (event) => {
    event.preventDefault();
    let moneyValue = Number(money);

    if (category === "saida") {
      moneyValue *= -1;
    }

    addTransaction({
      description: description,
      money: moneyValue,
      category: category,
    });
    setDescription("");
    setMoney("");
    setCategory("entrada");
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
        >
          <option value="entrada">Entrada</option>
          <option value="saida">Saída</option>
        </Select>
        <button type="submit" className="button__default">
          Inserir valor
        </button>
      </div>
    </form>
  );
};
