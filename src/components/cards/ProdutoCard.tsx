interface ProdutoCardProps {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
  itens: {
    id: number;
    pedido: { id: number };
    produto: { id: number; nome: string };
    quantidade: number;
    valorUnitario: number;
  };
}

export function ProdutoCard({ id, nome, preco, quantidade }: ProdutoCardProps) {
  return (
    <div className="single__card">
      <div className="single__card-customer">
        <p>Código: {id}</p>
        <p>Produto: {nome}</p>
        <p>Preço: {preco.toFixed(2)}</p>
        <p>Estoque: {quantidade}</p>
      </div>
    </div>
  );
}
