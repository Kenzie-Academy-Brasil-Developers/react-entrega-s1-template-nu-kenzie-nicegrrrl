import styles from "./style.module.scss";

export const TotalAmountSection = () => {
  return (
    <section>
      {/* <div className="container"> */}
      <div className={styles.flexBox}>
        <div className={styles.top}>
          <h2 className="title3">Valor total:</h2>
          <span className="bodyTypography">O valor se refere ao saldo</span>
        </div>
        <div>
          <p className="title3 pink">R$ 8184,00</p>
        </div>
        {/* </div> */}
      </div>
    </section>
  );
};
