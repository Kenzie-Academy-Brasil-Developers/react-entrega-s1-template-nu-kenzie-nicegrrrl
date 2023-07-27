import styles from "./style.module.scss";

export const Card = ({
  id,
  description,
  money,
  category,
  removeTransaction,
}) => {
  const categories = {
    entrada: "Entrada",
    saida: "Saída",
  };

  const getCardStyle = () => {
    if (category === "entrada") {
      return `${styles.card} ${styles.input}`;
    } else {
      return `${styles.card} ${styles.output}`;
    }
  };

  return (
    <li className={getCardStyle()}>
      <div className={styles.flexBox}>
        <div className={styles.flexDescription}>
          <h3 className="title3">{description}</h3>
          <span className="bodyTypography">{categories[category]}</span>
        </div>
        <div className={styles.flexValue}>
          <p className="bodyTypography">
            {money.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
          <button
            className="button__delete"
            onClick={() => removeTransaction(id)}
          >
            Excluir
          </button>
        </div>
      </div>
    </li>
  );
};
