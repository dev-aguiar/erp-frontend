import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Input } from "../components/inputs/Input";
import { useProdutoData } from "../hooks/useProdutoData";
import { useAdicionarProdutoPedido } from "../hooks/useAdicionarProdutoPedido";
import { formatBRL } from "../utils/format";

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
      closeModal();
    }
  }, [isSuccess, closeModal]);

  const handleAdicionar = () => {
    if (!produtoId || quantidade <= 0) {
      alert("Selecione um produto e informe a quantidade.");
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
          <label>Produto</label>
          <select
            value={produtoId}
            onChange={(e) => setProdutoId(e.target.value)}
            style={{ padding: "10px", borderRadius: "10px" }}
          >
            <option value="">Selecione um produto</option>
            {produtos?.map((produto) => (
              <option key={produto.id} value={produto.id}>
                {produto.nome} - {formatBRL(produto.preco)}
              </option>
            ))}
          </select>
          <Input
            label="Quantidade"
            value={quantidade}
            updateValue={(value) => setQuantidade(Number(value))}
          />
        </form>
        <button onClick={handleAdicionar} className="modal__form-btn">
          {isPending ? "Adicionando..." : "Adicionar"}
        </button>
      </div>
    </div>
  );
}
