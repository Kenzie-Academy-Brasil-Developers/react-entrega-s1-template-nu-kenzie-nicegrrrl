import styles from "./style.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className="container">
        <h1 className={`title1 ${styles.logo}`}>
          <span>Nu</span> Kenzie
        </h1>
      </div>
    </header>
  );
};
