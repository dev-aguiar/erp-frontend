import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { VendedorCard } from "../components/cards/VendedorCard";
import { useVendedorData } from "../hooks/useVendedorData";
import { ModalVendedor } from "../modals/ModalVendedor";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Vendedores = () => {
  const { data } = useVendedorData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <div className="vendedores">
      <div className="vendedores__header">Vendedores</div>
      <div className="vendedores__card">
        {data?.map((vendedorData) => (
          <VendedorCard
            id={vendedorData.id}
            nome={vendedorData.nome}
            dataNascimento={vendedorData.dataNascimento}
          />
        ))}
        {isModalOpen && <ModalVendedor closeModal={handleOpenModal} />}
        <FontAwesomeIcon
          className="open__modal-button"
          icon={faUserPlus}
          onClick={handleOpenModal}
        />
      </div>
    </div>
  );
};

export default Vendedores;
