export const FinancialSummarySection = () => {
  return (
    <section>
      <div className="container">
        <h2>Resumo Financeiro</h2>
        <ul>
          <li>
            <div>
              <h3>Salário - Mês Dezembro</h3>
              <span>Entrada</span>
            </div>
            <div>
              <p>R$ 6.660,00</p>
              <button>Excluir</button>
            </div>
          </li>
          <li>
            <div>
              <h3>Salário - Mês Dezembro</h3>
              <span>Despesa</span>
            </div>
            <div>
              <p>R$ 6.660,00</p>
              <button>Excluir</button>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
