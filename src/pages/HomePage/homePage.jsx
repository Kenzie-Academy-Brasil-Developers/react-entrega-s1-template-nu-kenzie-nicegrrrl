import { useState } from "react";
import { DefaultTemplate } from "../../components/DefaultTemplate/defaultTemplate";
import { FinancialSummarySection } from "../../components/sections/FinancialSummarySection/financialSummarySection";
import { FormSection } from "../../components/sections/FormSection/formSection";
import { TotalAmountSection } from "../../components/sections/TotalAmountSection/totalAmountSection";
import styles from "./style.module.scss";

export const HomePage = () => {
  const [transactionsList, setTransactionsList] = useState([]);

  const addTransaction = (formData) => {
    const newTransaction = { ...formData, id: crypto.randomUUID() };
    setTransactionsList([...transactionsList, newTransaction]);
  };

  const removeTransaction = (removeId) => {
    const newTransactionList = transactionsList.filter(
      (transaction) => transaction.id !== removeId
    );
    setTransactionsList(newTransactionList);
  };

  const totalAmount = transactionsList.reduce(
    (accumulator, transaction) => accumulator + transaction.money,
    0
  );

  return (
    <DefaultTemplate>
      <div className={styles.sectionContainer}>
        <div className={styles.top}>
          <FormSection addTransaction={addTransaction} />
          {transactionsList.length > 0 ? (
            <TotalAmountSection totalAmount={totalAmount} />
          ) : (
            <></>
          )}
        </div>
        <div className={styles.detailedInfo}>
          <FinancialSummarySection
            transactionsList={transactionsList}
            removeTransaction={removeTransaction}
          />
        </div>
      </div>
    </DefaultTemplate>
  );
};
