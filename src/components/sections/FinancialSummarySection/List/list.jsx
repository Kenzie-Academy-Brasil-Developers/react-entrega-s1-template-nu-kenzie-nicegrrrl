import { Card } from "./Card/card";
import styles from "./style.module.scss";

export const List = ({ transactionsList }) => {
  return (
    <ul className={styles.list}>
      {transactionsList.map((transaction) => (
        <Card
          description={transaction.description}
          money={transaction.money}
          category={transaction.category}
          key={transaction.id}
        />
      ))}

      {/* <Card
        description="Salário - Mês Dezembro"
        money={8000}
        category="Entrada"
      />
      <Card
        description="Salário - Mês Dezembro"
        money={2000}
        category="Saída"
      /> */}
    </ul>
  );
};
