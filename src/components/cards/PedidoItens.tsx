import { useItemPedidoData } from "../../hooks/useItemPedidoData";
import { useProdutoData } from "../../hooks/useProdutoData";

interface PedidoItensProps {
  pedidoId: number;
}

export function PedidoItens({ pedidoId }: PedidoItensProps) {
  const { data: itens, isLoading } = useItemPedidoData(pedidoId);
  const { data: produtos } = useProdutoData();

  if (isLoading) return <p>Carregando itens...</p>;
  if (!itens || itens.length === 0) return <p>Nenhum produto neste pedido.</p>;

  const nomePorId = new Map<number, string>(
    produtos?.map((p) => [p.id, p.nome] as [number, string]) ?? []
  );

  return (
    <div className="pedido__itens">
      <b>Itens:</b>
      {itens.map((item) => (
        <p key={item.id}>
          {nomePorId.get(item.produtoId) ?? `Produto ${item.produtoId}`} —{" "}
          {item.quantidade}x R$ {item.valorUnitario?.toFixed(2) ?? "0.00"}
        </p>
      ))}
    </div>
  );
}