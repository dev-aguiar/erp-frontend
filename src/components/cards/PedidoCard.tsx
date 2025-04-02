interface PedidoCardProps {
  id: number;
  cliente: {
    id: number;
    nome: string;
  };
  vendedor: {
    id: number;
    nome: string;
  };
  dataPedido: Date;
  formaPagamento: string;
  statusPedido: string;
  onAdicionarProduto: (pedidoId: number) => void;
}

export function PedidoCard({
  id,
  cliente,
  vendedor,
  dataPedido,
  formaPagamento,
  statusPedido,
  onAdicionarProduto,
}: PedidoCardProps) {
  const dataFormatada =
    dataPedido instanceof Date
      ? dataPedido.toLocaleDateString()
      : new Date(dataPedido + "T00:00:00").toLocaleDateString();

  return (
    <div className="single__card">
      <div className="single__card-customer">
        <p>Pedido: {id}</p>
        <b>Cliente:</b>
        <p>ID: {cliente.id}</p>
        <p>Nome: {cliente.nome}</p>
        <b>Vendedor:</b>
        <p>ID: {vendedor.id}</p>
        <p>Nome: {vendedor.nome}</p>
        <b>Data: {dataFormatada}</b>
        <b>Pagamento: {formaPagamento}</b>
        <b>Status: {statusPedido}</b>
      </div>
      <button onClick={() => onAdicionarProduto(id)}>Adicionar Produto</button>
    </div>
  );
}
