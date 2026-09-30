import { useState } from "react";
import { ProdutoCard } from "../components/cards/ProdutoCard";
import { useProdutoData } from "../hooks/useProdutoData";
import { useProdutoDataDelete } from "../hooks/useProdutoDataMutate";
import { ModalProduto } from "../modals/ModalProduto";
import { ProdutoData } from "../interfaces/ProdutoData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";

const Produtos = () => {
  const { data } = useProdutoData();
  const { mutate: excluir } = useProdutoDataDelete();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [produtoSelecionado, setProdutoSelecionado] = useState<
    ProdutoData | undefined
  >(undefined);

  const abrirNovo = () => {
    setProdutoSelecionado(undefined);
    setIsModalOpen(true);
  };

  const abrirEdicao = (produto: ProdutoData) => {
    setProdutoSelecionado(produto);
    setIsModalOpen(true);
  };

  const fecharModal = () => {
    setIsModalOpen(false);
    setProdutoSelecionado(undefined);
  };

  const handleExcluir = (id: number) => {
    if (window.confirm("Deseja excluir este produto?")) {
      excluir(id);
    }
  };

  return (
    <div className="produtos">
      <div className="produtos__header">Produtos</div>
      <div className="produtos__card">
        {data?.map((produtoData) => (
          <ProdutoCard
            key={produtoData.id}
            id={produtoData.id}
            nome={produtoData.nome}
            preco={produtoData.preco}
            quantidade={produtoData.quantidade}
            onEditar={() => abrirEdicao(produtoData)}
            onExcluir={() => handleExcluir(produtoData.id)}
          />
        ))}
        {isModalOpen && (
          <ModalProduto closeModal={fecharModal} produto={produtoSelecionado} />
        )}
        <FontAwesomeIcon
          className="open__modal-button"
          icon={faPlusSquare}
          onClick={abrirNovo}
        />
      </div>
    </div>
  );
};

export default Produtos;
