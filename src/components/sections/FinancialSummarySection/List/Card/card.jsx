export const Card = ({ financialType }) => {
  return (
    <li>
      <div>
        <h3>Salário - Mês Dezembro</h3>
        <span>{financialType}</span>
      </div>
      <div>
        <p>R$ 6.660,00</p>
        <button className="button__delete">Excluir</button>
      </div>
    </li>
  );
};
