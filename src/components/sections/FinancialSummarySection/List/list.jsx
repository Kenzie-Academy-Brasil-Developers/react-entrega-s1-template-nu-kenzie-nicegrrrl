import { Card } from "./Card/card";
import styles from "./style.module.scss";

export const List = ({ transactionsList, removeTransaction }) => {
  return (
    <ul className={styles.list}>
      {transactionsList.map((transaction) => (
        <Card
          description={transaction.description}
          money={transaction.money}
          category={transaction.category}
          key={transaction.id}
          id={transaction.id}
          removeTransaction={removeTransaction}
        />
      ))}
    </ul>
  );
};
