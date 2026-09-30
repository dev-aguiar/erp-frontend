interface ProdutoCardProps {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
  onEditar: () => void;
  onExcluir: () => void;
}

export function ProdutoCard({
  id,
  nome,
  preco,
  quantidade,
  onEditar,
  onExcluir,
}: ProdutoCardProps) {
  return (
    <div className="single__card">
      <div className="single__card-customer">
        <p>Código: {id}</p>
        <p>Produto: {nome}</p>
        <p>Preço: {preco.toFixed(2)}</p>
        <p>Estoque: {quantidade}</p>
        <div className="single__card-actions">
          <button onClick={onEditar}>Editar</button>
          <button className="btn-excluir" onClick={onExcluir}>
            Excluir
          </button>
        </div>
      </div>
    </div>
  );
}
