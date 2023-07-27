import styles from "./style.module.scss";

export const TotalAmountSection = ({ totalAmount }) => {
  return (
    <section>
      <div className={styles.flexBox}>
        <div className={styles.top}>
          <h2 className="title3">Valor total:</h2>
          <span className="bodyTypography">O valor se refere ao saldo</span>
        </div>
        <div>
          <p className="title3 pink">
            {totalAmount.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
        </div>
      </div>
    </section>
  );
};
