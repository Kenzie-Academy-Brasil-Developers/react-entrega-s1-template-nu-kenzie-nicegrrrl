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

  const sumInputValues = (list) => {
    const inputValuesList = list.filter((item) => item.category === "entrada");
    const sum = inputValuesList.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.money;
    }, 0);
    return sum;
  };

  const sumOutputValues = (list) => {
    const inputValuesList = list.filter((item) => item.category === "saida");
    const sum = inputValuesList.reduce((accumulator, currentValue) => {
      return accumulator + currentValue.money;
    }, 0);
    return sum;
  };

  const calcTotalAmount = () => {
    const sumInputs = sumInputValues(transactionsList);
    const sumOutputs = sumOutputValues(transactionsList);

    const total = sumInputs - sumOutputs;
    return total;
  };

  const totalAmount = calcTotalAmount();

  return (
    <DefaultTemplate>
      <div className={styles.sectionContainer}>
        <div className={styles.top}>
          <FormSection addTransaction={addTransaction} />
          <TotalAmountSection totalAmount={totalAmount} />
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
