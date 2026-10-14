import { useState } from "react";
import { PedidoItens } from "./PedidoItens";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faListUl,
  faPlus,
  faPen,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

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
    <Card title={`Pedido #${id}`}>
      <dl className="space-y-2 text-sm">
        <div className="flex justify-between gap-4">
          <dt className="text-slate-500">Cliente</dt>
          <dd className="text-right font-medium text-slate-900">
            {cliente.id} - {cliente.nome}
          </dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-slate-500">Vendedor</dt>
          <dd className="text-right font-medium text-slate-900">
            {vendedor.id} - {vendedor.nome}
          </dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-slate-500">Data</dt>
          <dd className="font-medium text-slate-900">{dataFormatada}</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-slate-500">Pagamento</dt>
          <dd className="font-medium text-slate-900">{formaPagamento}</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-slate-500">Status</dt>
          <dd>
            <span className="rounded-full bg-indigo-50 px-2 py-0.5 text-xs font-medium text-indigo-700">
              {statusPedido}
            </span>
          </dd>
        </div>
      </dl>

      {mostrarItens && (
        <div className="mt-4 border-t border-slate-100 pt-3">
          <PedidoItens pedidoId={id} />
        </div>
      )}

      <div className="mt-4 space-y-3 border-t border-slate-100 pt-3">
        <Button
          variant="ghost"
          size="sm"
          fullWidth
          onClick={() => setMostrarItens((v) => !v)}
        >
          <FontAwesomeIcon icon={faListUl} />
          {mostrarItens ? "Ocultar itens" : "Ver itens"}
        </Button>

        <div className="flex items-center gap-2">
          <Button
            variant="primary"
            size="sm"
            className="flex-1"
            onClick={() => onAdicionarProduto(id)}
          >
            <FontAwesomeIcon icon={faPlus} />
            Adicionar Produto
          </Button>
          <Button
            variant="secondary"
            size="sm"
            onClick={onEditar}
            aria-label="Editar"
            title="Editar"
          >
            <FontAwesomeIcon icon={faPen} />
          </Button>
          <Button
            variant="danger"
            size="sm"
            onClick={onExcluir}
            aria-label="Excluir"
            title="Excluir"
          >
            <FontAwesomeIcon icon={faTrash} />
          </Button>
        </div>
      </div>
    </Card>
  );
}
