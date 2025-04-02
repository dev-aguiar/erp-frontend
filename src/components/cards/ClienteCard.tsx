interface ClienteCardProps {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  endereco: string;
  pedidos: Array<{
    id: number;
    dataPedido: Date;
    formaPagamento: string;
    statusPedido: string;
  }>;
}

export function ClienteCard({
  id,
  nome,
  email,
  telefone,
  endereco,
  pedidos,
}: ClienteCardProps) {
  return (
    <div className="single__card">
      <div className="single__card-customer">
        <p>ID: {id}</p>
        <b>Cliente: {nome}</b>
        <p>Telefone: {telefone}</p>
        <p>Email: {email}</p>
        <p>Endereço: {endereco}</p>
        {pedidos && pedidos.length > 0 ? (
          <div>
            {pedidos.map((pedido) => (
              <div key={pedido.id}>
                <p>Pedidos:</p>
                <p>ID: {pedido.id}</p>
                <p>Data: {pedido.dataPedido.toLocaleString()}</p>
                <p>Pagamento: {pedido.formaPagamento}</p>
                <p>Status: {pedido.statusPedido}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>Sem Pedidos</p>
        )}
      </div>
    </div>
  );
}
