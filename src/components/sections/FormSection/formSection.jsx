import { Form } from "../../forms/Form/form";

export const FormSection = ({ addTransaction }) => {
  return (
    <section>
      <Form addTransaction={addTransaction} />
    </section>
  );
};
