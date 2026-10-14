import { Button } from "../ui/Button";

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
    <div className="single__card">
      <div className="single__card-customer">
        <p>ID: {id}</p>
        <p>Nome: {nome}</p>
        <p>Data de Nascimento: {dataFormatada}</p>
        <div className="single__card-actions">
          <Button variant="secondary" size="sm" onClick={onEditar}>
            Editar
          </Button>
          <Button variant="danger" size="sm" onClick={onExcluir}>
            Excluir
          </Button>
        </div>
      </div>
    </div>
  );
}
