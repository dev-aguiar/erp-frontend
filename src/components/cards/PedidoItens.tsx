import { useItemPedidoData } from "../../hooks/useItemPedidoData";
import { useProdutoData } from "../../hooks/useProdutoData";

interface PedidoItensProps {
  pedidoId: number;
}

const formatBRL = (valor: number) =>
  valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

export function PedidoItens({ pedidoId }: PedidoItensProps) {
  const { data: itens, isLoading } = useItemPedidoData(pedidoId);
  const { data: produtos } = useProdutoData();

  if (isLoading) return <p className="pedido__itens-info">Carregando itens...</p>;
  if (!itens || itens.length === 0)
    return <p className="pedido__itens-info">Nenhum produto neste pedido.</p>;

  const nomePorId = new Map<number, string>(
    produtos?.map((p) => [p.id, p.nome] as [number, string]) ?? []
  );

  const total = itens.reduce(
    (acc, item) => acc + (item.valorUnitario ?? 0) * item.quantidade,
    0
  );

  return (
    <div className="pedido__itens">
      <b>Itens</b>
      <ul className="pedido__itens-lista">
        {itens.map((item) => {
          const unitario = item.valorUnitario ?? 0;
          const subtotal = unitario * item.quantidade;
          return (
            <li key={item.id} className="pedido__item">
              <span className="pedido__item-nome">
                {nomePorId.get(item.produtoId) ?? `Produto ${item.produtoId}`}
              </span>
              <span className="pedido__item-detalhe">
                {item.quantidade} × {formatBRL(unitario)} ={" "}
                <strong>{formatBRL(subtotal)}</strong>
              </span>
            </li>
          );
        })}
      </ul>
      <div className="pedido__itens-total">
        Total: <strong>{formatBRL(total)}</strong>
      </div>
    </div>
  );
}