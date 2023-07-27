import { List } from "./List/list";
import styles from "./style.module.scss";

export const FinancialSummarySection = ({
  transactionsList,
  removeTransaction,
}) => {
  return (
    <section className={styles.section}>
      {transactionsList.length > 0 ? (
        <>
          <h2 className="title3">Resumo Financeiro 🤑</h2>
          <List
            transactionsList={transactionsList}
            removeTransaction={removeTransaction}
          />
        </>
      ) : (
        <>
          <h2 className="title3">Resumo Financeiro 🙁</h2>
          <p className="title2">Você ainda não possui nenhum lançamento</p>
        </>
      )}
    </section>
  );
};
