import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Input } from "../components/inputs/Input";
import {
  useProdutoDataMutate,
  useProdutoDataUpdate,
} from "../hooks/useProdutoDataMutate";
import { ProdutoData, ProdutoRequest } from "../interfaces/ProdutoData";
import { toast } from "react-toastify";

interface ModalProps {
  closeModal(): void;
  produto?: ProdutoData;
}

export function ModalProduto({ closeModal, produto }: ModalProps) {
  const isEdit = !!produto;

  const [nome, setNome] = useState(produto?.nome ?? "");
  const [preco, setPreco] = useState<string>(
    produto ? String(produto.preco) : ""
  );
  const [quantidade, setQuantidade] = useState<number>(
    produto?.quantidade ?? 0
  );

  const { mutate, isSuccess, isPending } = useProdutoDataMutate();
  const {
    mutate: update,
    isSuccess: isUpdateSuccess,
    isPending: isUpdatePending,
  } = useProdutoDataUpdate();

  const submit = () => {
    const precoNum = Number(preco.replace(",", "."));
    if (isNaN(precoNum) || precoNum <= 0) {
      toast.error("Informe um preço válido.");
      return;
    }

     const data: ProdutoRequest = {
       nome,
      preco: precoNum,
       quantidade: Number(quantidade),
     };

    if (isEdit && produto) {
      update({ id: produto.id, data });
    } else {
      mutate(data);
    }
  };

  useEffect(() => {
    if (isSuccess || isUpdateSuccess) {
      toast.success(isEdit ? "Produto atualizado com sucesso!" : "Produto criado!")
      closeModal();
    }
  }, [isSuccess, isUpdateSuccess, closeModal]);

  return (
    <div className="modal__container">
      <div className="modal__container-body">
        <div className="modal__container-header">
          {isEdit ? "Editar produto" : "Novo produto"}
          <FontAwesomeIcon icon={faXmark} onClick={closeModal} />
        </div>
        <form className="modal__form">
          <Input label="Nome" value={nome} updateValue={setNome} />
          <Input
            label="Preço"
            value={preco}
            updateValue={setPreco}
          />
          <Input
            label="Quantidade"
            value={quantidade}
            updateValue={(value) => setQuantidade(Number(value))}
          />
        </form>
        <button onClick={submit} className="modal__form-btn">
          {isPending || isUpdatePending ? "Salvando..." : "Salvar"}
        </button>
      </div>
    </div>
  );
}
