import { Button } from "../ui/Button";
import { Card } from "../ui/Card";

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

      <div className="mt-4 flex flex-wrap justify-between gap-2">
        <Button variant="secondary" size="sm" onClick={onEditar}>
          Editar
        </Button>
        <Button variant="danger" size="sm" onClick={onExcluir}>
          Excluir
        </Button>
      </div>
    </Card>
  );
}
