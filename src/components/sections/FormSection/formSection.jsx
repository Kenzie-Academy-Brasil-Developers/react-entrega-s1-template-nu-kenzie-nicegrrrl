export const FormSection = () => {
  return (
    <section>
      <form>
        <div className="container">
          <div>
            <label htmlFor="">Descrição</label>
            <input type="text" placeholder="Digite aqui sua descrição" />
            <span>Ex: Compra de roupas</span>
          </div>
          <div>
            <label htmlFor="">Valor (R$)</label>
            <input type="number" placeholder="1" />
          </div>
          <div>
            <label htmlFor="">Tipo de valor</label>
            <select name="" id="">
              <option value="">Entrada</option>
              <option value="">Saída</option>
            </select>
          </div>
          <button type="submit">Inserir valor</button>
        </div>
      </form>
    </section>
  );
};
