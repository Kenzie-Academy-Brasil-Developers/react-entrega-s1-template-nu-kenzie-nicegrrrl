import styles from "./style.module.scss";

export const Card = ({ financialType }) => {
  return (
    <li className={styles.card}>
      <div className={styles.flexBox}>
        <div className={styles.flexLeft}>
          <h3 className="title3">Salário - Mês Dezembro</h3>
          <span className="bodyTypography">{financialType}</span>
        </div>
        <div className={styles.flexRight}>
          <p className="bodyTypography">R$ 6.660,00</p>
          <button className="button__delete">Excluir</button>
        </div>
      </div>
    </li>
  );
};
