import { Header } from "../Header/header";
import styles from "./style.module.scss";

export const DefaultTemplate = ({ children }) => {
  return (
    <>
      <Header />
      <div className={`container ${styles.main}`}>
        <main>{children}</main>
      </div>
    </>
  );
};
