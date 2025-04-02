import { useState } from "react";
import { ProdutoCard } from "../components/cards/ProdutoCard";
import { useProdutoData } from "../hooks/useProdutoData";
import { ModalProduto } from "../modals/ModalProduto";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";

const Produtos = () => {
  const { data } = useProdutoData();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <div className="produtos">
      <div className="produtos__header">Produtos</div>
      <div className="produtos__card">
        {data?.map((produtoData) => (
          <ProdutoCard
            id={produtoData.id}
            nome={produtoData.nome}
            preco={produtoData.preco}
            quantidade={produtoData.quantidade}
            itens={produtoData.itens}
          />
        ))}
        {isModalOpen && <ModalProduto closeModal={handleOpenModal} />}
        <FontAwesomeIcon
          className="open__modal-button"
          icon={faPlusSquare}
          onClick={handleOpenModal}
        />
      </div>
    </div>
  );
};

export default Produtos;
