import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

interface VendedorCardProps {
  id: number;
  nome: string;
  dataNascimento: string;
  onEditar: () => void;
  onExcluir: () => void;
}

export function VendedorCard({
  id,
  nome,
  dataNascimento,
  onEditar,
  onExcluir,
}: VendedorCardProps) {
  const dataFormatada = new Date(
    dataNascimento + "T00:00:00"
  ).toLocaleDateString();

  return (
    <Card title={nome}>
      <dl className="space-y-2 text-sm">
        <div className="flex justify-between gap-4">
          <dt className="text-slate-500">ID</dt>
          <dd className="font-medium text-slate-900">{id}</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-slate-500">Data de Nascimento</dt>
          <dd className="font-medium text-slate-900">{dataFormatada}</dd>
        </div>
      </dl>

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
