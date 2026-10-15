import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Input } from "../components/ui/Input";
import {
  useProdutoDataMutate,
  useProdutoDataUpdate,
} from "../hooks/useProdutoDataMutate";
import { ProdutoData, ProdutoRequest } from "../interfaces/ProdutoData";
import { toast } from "react-toastify";
import { Button } from "../components/ui/Button";

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
  }, [isSuccess, isUpdateSuccess, closeModal, isEdit]);

  return (
    <div className="modal__container">
      <div className="modal__container-body">
        <div className="modal__container-header">
          {isEdit ? "Editar produto" : "Novo produto"}
          <FontAwesomeIcon icon={faXmark} onClick={closeModal} />
        </div>
        <form className="modal__form">
          <Input
            label="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <Input
            label="Preço"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
          />
          <Input
            label="Quantidade"
            type="number"
            value={quantidade}
            onChange={(e) => setQuantidade(Number(e.target.value))}
          />
        </form>
        <Button
          fullWidth
          onClick={submit}
          disabled={isPending || isUpdatePending}
        >
          {isPending || isUpdatePending ? "Salvando..." : "Salvar"}
        </Button>
      </div>
    </div>
  );
}
