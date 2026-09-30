import { useState } from "react";
import { ClienteCard } from "../components/cards/ClienteCard";
import { useClienteData } from "../hooks/useClienteData";
import { useClienteDataDelete } from "../hooks/useClienteDataMutate";
import { ModalCliente } from "../modals/ModalCliente";
import { ClienteData } from "../interfaces/ClienteData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonCirclePlus } from "@fortawesome/free-solid-svg-icons";

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
    <div className="clientes">
      <div className="clientes__header">Clientes</div>
      <div className="clientes__card">
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
      {isModalOpen && (
        <ModalCliente closeModal={fecharModal} cliente={clienteSelecionado} />
      )}
      <FontAwesomeIcon
        className="open__modal-button"
        icon={faPersonCirclePlus}
        onClick={abrirNovo}
      />
    </div>
  );
};

export default Clientes;
