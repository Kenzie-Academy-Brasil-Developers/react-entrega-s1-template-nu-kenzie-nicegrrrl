import { Header } from "../Header/header";

export const DefaultTemplate = ({ children }) => {
  return (
    <>
      <Header />
      <div className="container">
        <main>{children}</main>
      </div>
    </>
  );
};
