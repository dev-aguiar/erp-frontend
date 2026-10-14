import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Input } from "../components/ui/Input";
import { Select } from "../components/ui/Select";
import { useProdutoData } from "../hooks/useProdutoData";
import { useAdicionarProdutoPedido } from "../hooks/useAdicionarProdutoPedido";
import { formatBRL } from "../utils/format";
import { toast } from "react-toastify";
import { Button } from "../components/ui/Button";

interface ModalAdicionarProdutoProps {
  pedidoId: number;
  closeModal: () => void;
}

export function ModalAdicionarProduto({
  pedidoId,
  closeModal,
}: ModalAdicionarProdutoProps) {
  const [produtoId, setProdutoId] = useState<string>("");
  const [quantidade, setQuantidade] = useState<number>(1);

  const { data: produtos } = useProdutoData();
  const { mutate, isSuccess, isPending } = useAdicionarProdutoPedido();

  useEffect(() => {
    if (isSuccess) {
      toast.success("Produto adicionado ao pedido com sucesso!")
      closeModal();
    }
  }, [isSuccess, closeModal]);

  const handleAdicionar = () => {
    if (!produtoId || quantidade <= 0) {
      toast.error("Selecione um produto e informe a quantidade.");
      return;
    }

    mutate({
      pedidoId,
      produtoId: Number(produtoId),
      quantidade,
    });
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
        <form className="modal__form">
          <Select
            label="Produto"
            value={produtoId}
            onChange={(e) => setProdutoId(e.target.value)}
            placeholder="Selecione um produto"
            options={
              produtos?.map((produto) => ({
                value: String(produto.id),
                label: `${produto.nome} - ${formatBRL(produto.preco)}`,
              })) ?? []
            }
          />
          <Input
            label="Quantidade"
            type="number"
            value={quantidade}
            onChange={(e) => setQuantidade(Number(e.target.value))}
          />
        </form>
        <Button fullWidth onClick={handleAdicionar} disabled={isPending}>
          {isPending ? "Adicionando..." : "Adicionar"}
        </Button>
      </div>
    </div>
  );
}
