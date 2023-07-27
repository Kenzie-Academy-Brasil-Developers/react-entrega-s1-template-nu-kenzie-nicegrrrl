import { useState } from "react";
import { DefaultTemplate } from "../../components/DefaultTemplate/defaultTemplate";
import { FinancialSummarySection } from "../../components/sections/FinancialSummarySection/financialSummarySection";
import { FormSection } from "../../components/sections/FormSection/formSection";
import { TotalAmountSection } from "../../components/sections/TotalAmountSection/totalAmountSection";
import styles from "./style.module.scss";

export const HomePage = () => {
  const [transactionsList, setTransactionsList] = useState([]);

  // console.log(transactionsList);

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

  return (
    <DefaultTemplate>
      <div className={styles.sectionContainer}>
        <div className={styles.top}>
          <FormSection addTransaction={addTransaction} />
          <TotalAmountSection />
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
