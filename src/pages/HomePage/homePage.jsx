import { DefaultTemplate } from "../../components/DefaultTemplate/defaultTemplate";
import { FinancialSummarySection } from "../../components/sections/FinancialSummarySection/financialSummarySection";
import { FormSection } from "../../components/sections/FormSection/formSection";
import { TotalAmountSection } from "../../components/sections/TotalAmountSection/totalAmountSection";
import styles from "./style.module.scss";

export const HomePage = () => {
  return (
    <DefaultTemplate>
      <div className={styles.sectionContainer}>
        <div className={styles.top}>
          <FormSection />
          <TotalAmountSection />
        </div>
        <div className={styles.detailedInfo}>
          <FinancialSummarySection />
        </div>
      </div>
    </DefaultTemplate>
  );
};
