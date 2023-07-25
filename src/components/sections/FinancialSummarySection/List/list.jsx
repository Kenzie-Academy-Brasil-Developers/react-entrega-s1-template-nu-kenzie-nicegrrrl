import { Card } from "./Card/card";
import styles from "./style.module.scss";

export const List = () => {
  return (
    <ul className={styles.list}>
      <Card financialType="Entrada" />
      <Card financialType="Saída" />
      <Card financialType="Entrada" />
      <Card financialType="Entrada" />
    </ul>
  );
};
