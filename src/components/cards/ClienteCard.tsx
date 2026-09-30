import { PedidoResumido } from "../../interfaces/PedidoData";

interface ClienteCardProps {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  endereco: string;
  pedidos: PedidoResumido[];
  onEditar: () => void;
  onExcluir: () => void;
}

export function ClienteCard({
  id,
  nome,
  email,
  telefone,
  endereco,
  pedidos,
  onEditar,
  onExcluir,
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
            <p>Pedidos:</p>
            {pedidos.map((pedido) => (
              <div key={pedido.id}>
                <p>ID: {pedido.id}</p>
                <p>
                  Data:{" "}
                  {new Date(
                    pedido.dataPedido + "T00:00:00"
                  ).toLocaleDateString()}
                </p>
                <p>Status: {pedido.statusPedido}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>Sem Pedidos</p>
        )}
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
