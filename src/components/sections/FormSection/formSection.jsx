import { Form } from "../../forms/Form/form";

export const FormSection = ({ addTransaction }) => {
  return (
    <section>
      {/* <div className="container"> */}
      <Form addTransaction={addTransaction} />
      {/* </div> */}
    </section>
  );
};
