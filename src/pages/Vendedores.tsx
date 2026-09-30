import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { VendedorCard } from "../components/cards/VendedorCard";
import { useVendedorData } from "../hooks/useVendedorData";
import { useVendedorDataDelete } from "../hooks/usevendedorDataMutate";
import { ModalVendedor } from "../modals/ModalVendedor";
import { VendedorData } from "../interfaces/VendedorData";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Vendedores = () => {
  const { data } = useVendedorData();
  const { mutate: excluir } = useVendedorDataDelete();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [vendedorSelecionado, setVendedorSelecionado] = useState<
    VendedorData | undefined
  >(undefined);

  const abrirNovo = () => {
    setVendedorSelecionado(undefined);
    setIsModalOpen(true);
  };

  const abrirEdicao = (vendedor: VendedorData) => {
    setVendedorSelecionado(vendedor);
    setIsModalOpen(true);
  };

  const fecharModal = () => {
    setIsModalOpen(false);
    setVendedorSelecionado(undefined);
  };

  const handleExcluir = (id: number) => {
    if (window.confirm("Deseja excluir este vendedor?")) {
      excluir(id);
    }
  };

  return (
    <div className="vendedores">
      <div className="vendedores__header">Vendedores</div>
      <div className="vendedores__card">
        {data?.map((vendedorData) => (
          <VendedorCard
            key={vendedorData.id}
            id={vendedorData.id}
            nome={vendedorData.nome}
            dataNascimento={vendedorData.dataNascimento}
            onEditar={() => abrirEdicao(vendedorData)}
            onExcluir={() => handleExcluir(vendedorData.id)}
          />
        ))}
        {isModalOpen && (
          <ModalVendedor
            closeModal={fecharModal}
            vendedor={vendedorSelecionado}
          />
        )}
        <FontAwesomeIcon
          className="open__modal-button"
          icon={faUserPlus}
          onClick={abrirNovo}
        />
      </div>
    </div>
  );
};

export default Vendedores;
