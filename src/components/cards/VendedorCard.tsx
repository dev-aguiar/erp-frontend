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
          <button onClick={onEditar}>Editar</button>
          <button className="btn-excluir" onClick={onExcluir}>
            Excluir
          </button>
        </div>
      </div>
    </div>
  );
}
