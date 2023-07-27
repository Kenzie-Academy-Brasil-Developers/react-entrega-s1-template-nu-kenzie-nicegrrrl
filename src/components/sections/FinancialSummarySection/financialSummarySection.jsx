import { List } from "./List/list";
import styles from "./style.module.scss";

export const FinancialSummarySection = ({
  transactionsList,
  removeTransaction,
}) => {
  console.log(transactionsList.length);

  return (
    <section className={styles.section}>
      <h2 className="title3">Resumo Financeiro</h2>
      {transactionsList.length > 0 ? (
        <List
          transactionsList={transactionsList}
          removeTransaction={removeTransaction}
        />
      ) : (
        <p className="title2">Você ainda não possui nenhum lançamento</p>
      )}
    </section>
  );
};
