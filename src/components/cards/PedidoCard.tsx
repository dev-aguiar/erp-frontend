import { useState } from "react";
import { PedidoItens } from "./PedidoItens";
import { Button } from "../ui/Button";

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
  dataPedido: string;
  formaPagamento: string;
  statusPedido: string;
  onAdicionarProduto: (pedidoId: number) => void;
  onEditar: () => void;
  onExcluir: () => void;
}

export function PedidoCard({
  id,
  cliente,
  vendedor,
  dataPedido,
  formaPagamento,
  statusPedido,
  onAdicionarProduto,
  onEditar,
  onExcluir,
}: PedidoCardProps) {
  const [mostrarItens, setMostrarItens] = useState(false);

  const dataFormatada = new Date(
    dataPedido + "T00:00:00"
  ).toLocaleDateString();

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

        {mostrarItens && <PedidoItens pedidoId={id} />}
      </div>
      <div className="single__card-actions">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setMostrarItens((v) => !v)}
        >
          {mostrarItens ? "Ocultar itens" : "Ver itens"}
        </Button>
        <Button variant="primary" size="sm" onClick={() => onAdicionarProduto(id)}>
          Adicionar Produto
        </Button>
        <Button variant="secondary" size="sm" onClick={onEditar}>
          Editar
        </Button>
        <Button variant="danger" size="sm" onClick={onExcluir}>
          Excluir
        </Button>
      </div>
    </div>
  );
}
