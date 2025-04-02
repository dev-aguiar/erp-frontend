interface VendedorCardProps {
  id: number;
  nome: string;
  dataNascimento: Date;
}

export function VendedorCard({ id, nome, dataNascimento }: VendedorCardProps) {
  const dataFormatada =
    dataNascimento instanceof Date
      ? dataNascimento.toLocaleDateString()
      : new Date(dataNascimento + "T00:00:00").toLocaleDateString();

  return (
    <div className="single__card">
      <div className="single__card-customer">
        <p>ID: {id}</p>
        <p>Nome: {nome}</p>
        <p>Data de Nascimento: {dataFormatada}</p>
      </div>
    </div>
  );
}
