import { formatBRL } from "../../utils/format";
import { Button } from "../ui/Button";

interface ProdutoCardProps {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
  onEditar: () => void;
  onExcluir: () => void;
}

export function ProdutoCard({
  id,
  nome,
  preco,
  quantidade,
  onEditar,
  onExcluir,
}: ProdutoCardProps) {
  return (
    <div className="single__card">
      <div className="single__card-customer">
        <p>Código: {id}</p>
        <p>Produto: {nome}</p>
        <p>Preço: {formatBRL(preco)}</p>
        <p>Estoque: {quantidade}</p>
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
