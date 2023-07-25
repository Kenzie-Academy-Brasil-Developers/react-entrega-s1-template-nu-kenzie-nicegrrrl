import { DefaultTemplate } from "../../components/DefaultTemplate/defaultTemplate";
import { TotalAmountSection } from "../../components/TotalAmountSection/totalAmountSection";
import { FinancialSummarySection } from "../../components/sections/FinancialSummarySection/financialSummarySection";
import { FormSection } from "../../components/sections/FormSection/formSection";

export const HomePage = () => {
  return (
    <DefaultTemplate>
      <FormSection />
      <TotalAmountSection />
      <FinancialSummarySection />
    </DefaultTemplate>
  );
};
