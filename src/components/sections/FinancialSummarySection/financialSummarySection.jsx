import { List } from "./List/list";
import styles from "./style.module.scss";

export const FinancialSummarySection = ({
  transactionsList,
  removeTransaction,
}) => {
  return (
    <section className={styles.section}>
      <h2 className="title3">Resumo Financeiro</h2>
      <List
        transactionsList={transactionsList}
        removeTransaction={removeTransaction}
      />
    </section>
  );
};
