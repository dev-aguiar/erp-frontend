import { useState } from "react";
import { ClienteCard } from "../components/cards/ClienteCard";
import { useClienteData } from "../hooks/useClienteData";
import { useClienteDataDelete } from "../hooks/useClienteDataMutate";
import { ModalCliente } from "../modals/ModalCliente";
import { ClienteData } from "../interfaces/ClienteData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../components/ui/Button";
import PageHeader from "../components/PageHeader";

const Clientes = () => {
  const { data } = useClienteData();
  const { mutate: excluir } = useClienteDataDelete();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [clienteSelecionado, setClienteSelecionado] = useState<
    ClienteData | undefined
  >(undefined);

  const abrirNovo = () => {
    setClienteSelecionado(undefined);
    setIsModalOpen(true);
  };

  const abrirEdicao = (cliente: ClienteData) => {
    setClienteSelecionado(cliente);
    setIsModalOpen(true);
  };

  const fecharModal = () => {
    setIsModalOpen(false);
    setClienteSelecionado(undefined);
  };

  const handleExcluir = (id: number) => {
    if (window.confirm("Deseja excluir este cliente?")) {
      excluir(id);
    }
  };

  return (
    <div>
      <PageHeader
        title="Clientes"
        subtitle={data ? `${data.length} cadastrado(s)` : undefined}
        action={
          <Button onClick={abrirNovo}>
            <FontAwesomeIcon icon={faPlus} />
            Novo cliente
          </Button>
        }
      />

      {data && data.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-300 bg-white py-16 text-center text-sm text-slate-400">
          Nenhum cliente cadastrado ainda.
        </div>
      ) : (
        <div className="grid gap-5 [grid-template-columns:repeat(auto-fill,minmax(340px,1fr))]">
          {data?.map((clienteData) => (
            <ClienteCard
              key={clienteData.id}
              id={clienteData.id}
              nome={clienteData.nome}
              email={clienteData.email}
              telefone={clienteData.telefone}
              endereco={clienteData.endereco}
              pedidos={clienteData.pedidos}
              onEditar={() => abrirEdicao(clienteData)}
              onExcluir={() => handleExcluir(clienteData.id)}
            />
          ))}
        </div>
      )}

      {isModalOpen && (
        <ModalCliente closeModal={fecharModal} cliente={clienteSelecionado} />
      )}
    </div>
  );
};

export default Clientes;
