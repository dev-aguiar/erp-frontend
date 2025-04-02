import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Input } from "../components/inputs/Input";
import { useProdutoDataMutate } from "../hooks/useProdutoDataMutate";
import { ProdutoData } from "../interfaces/ProdutoData";

interface ModalProps {
  closeModal(): void;
}

export function ModalProduto({ closeModal }: ModalProps) {
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState(0);
  const [quantidade, setQuantidade] = useState(0);
  const { mutate, isSuccess, isPending } = useProdutoDataMutate();

  const submit = () => {
    const produtoData: ProdutoData = {
      nome,
      preco,
      quantidade,
    };
    mutate(produtoData);
  };

  useEffect(() => {
    if (!isSuccess) return;
    closeModal();
  }, [isSuccess, isPending]);

  return (
    <div className="modal__container">
      <div className="modal__container-body">
        <div className="modal__container-header">
          Novo cliente
          <FontAwesomeIcon icon={faXmark} onClick={closeModal} />
        </div>
        <form className="modal__form">
          <Input label="Nome" value={nome} updateValue={setNome} />
          <Input label="Preço" value={preco} updateValue={setPreco} />
          <Input
            label="Quantidade"
            value={quantidade}
            updateValue={setQuantidade}
          />
        </form>
        <button onClick={submit} className="modal__form-btn">
          {isPending ? "Salvando..." : "Salvar"}
        </button>
      </div>
    </div>
  );
}
