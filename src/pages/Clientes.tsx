import { useState } from "react";
import { ClienteCard } from "../components/cards/ClienteCard";
import { useClienteData } from "../hooks/useClienteData";
import { ModalCliente } from "../modals/ModalCliente";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPersonCirclePlus } from "@fortawesome/free-solid-svg-icons";

const Clientes = () => {
  const { data } = useClienteData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <div className="clientes">
      <div className="clientes__header">Clientes</div>
      <div className="clientes__card">
        {data?.map((clienteData) => (
          <ClienteCard
            id={clienteData.id}
            nome={clienteData.nome}
            email={clienteData.email}
            telefone={clienteData.telefone}
            endereco={clienteData.endereco}
            pedidos={clienteData.pedidos}
          />
        ))}
      </div>
      {isModalOpen && <ModalCliente closeModal={handleOpenModal} />}
      <FontAwesomeIcon
        className="open__modal-button"
        icon={faPersonCirclePlus}
        onClick={handleOpenModal}
      />
    </div>
  );
};

export default Clientes;
