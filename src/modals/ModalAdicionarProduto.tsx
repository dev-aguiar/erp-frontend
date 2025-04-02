import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Input } from "../components/inputs/Input";

interface ModalAdicionarProdutoProps {
  pedidoId: number;
  closeModal: () => void;
}

export function ModalAdicionarProduto({
  pedidoId,
  closeModal,
}: ModalAdicionarProdutoProps) {
  const [produtoId, setProdutoId] = useState("");

  const handleAdicionar = () => {
    console.log(`Adicionando produto ${produtoId} ao pedido ${pedidoId}`);
    closeModal();
  };

  return (
    <div className="modal__container">
      <div className="modal__container-body">
        <div className="modal__container-header">
          <h2>
            Adicionar Produto ao Pedido <b>{pedidoId}</b>
          </h2>
          <FontAwesomeIcon icon={faXmark} onClick={closeModal} />
        </div>
        <Input
          label={"Id do Produto"}
          value={produtoId}
          updateValue={setProdutoId}
        />
        <button onClick={handleAdicionar}>Adicionar</button>
      </div>
    </div>
  );
}
