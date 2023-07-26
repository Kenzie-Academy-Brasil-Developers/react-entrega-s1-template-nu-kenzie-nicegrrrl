import styles from "./style.module.scss";

export const Card = ({ description, money, category }) => {
  return (
    <li className={styles.card}>
      <div className={styles.flexBox}>
        <div className={styles.flexLeft}>
          <h3 className="title3">{description}</h3>
          <span className="bodyTypography">{category}</span>
        </div>
        <div className={styles.flexRight}>
          <p className="bodyTypography">{money}</p>
          <button className="button__delete">Excluir</button>
        </div>
      </div>
    </li>
  );
};
