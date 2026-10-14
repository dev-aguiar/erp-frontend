import { PedidoResumido } from "../../interfaces/PedidoData";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

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
    <Card title={nome}>
      <dl className="space-y-2 text-sm">
        <div>
          <dt className="text-slate-500">ID</dt>
          <dd className="font-medium text-slate-900">{id}</dd>
        </div>
        <div>
          <dt className="text-slate-500">Telefone</dt>
          <dd className="font-medium text-slate-900">{telefone}</dd>
        </div>
        <div>
          <dt className="text-slate-500">Email</dt>
          <dd className="font-medium text-slate-900">{email}</dd>
        </div>
        <div>
          <dt className="text-slate-500">Endereço</dt>
          <dd className="mt-0.5 font-medium text-slate-900">{endereco}</dd>
        </div>
      </dl>

      <div className="mt-4 border-t border-slate-100 pt-3">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
          Pedidos
        </p>
        {pedidos && pedidos.length > 0 ? (
          <ul className="space-y-2">
            {pedidos.map((pedido) => (
              <li
                key={pedido.id}
                className="flex items-center justify-between gap-3 rounded-lg bg-slate-50 px-3 py-2 text-xs"
              >
                <span className="font-medium text-slate-700">
                  #{pedido.id}
                </span>
                <span className="text-slate-500">
                  {new Date(
                    pedido.dataPedido + "T00:00:00"
                  ).toLocaleDateString()}
                </span>
                <span className="font-medium text-slate-700">
                  {pedido.statusPedido}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-slate-400">Sem pedidos</p>
        )}
      </div>

      <div className="mt-4 flex justify-between gap-2 border-t border-slate-100 pt-3">
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
    </Card>
  );
}
