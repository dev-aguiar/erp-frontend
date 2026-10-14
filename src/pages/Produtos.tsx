import { useState } from "react";
import { ProdutoCard } from "../components/cards/ProdutoCard";
import { useProdutoData } from "../hooks/useProdutoData";
import { useProdutoDataDelete } from "../hooks/useProdutoDataMutate";
import { ModalProduto } from "../modals/ModalProduto";
import { ProdutoData } from "../interfaces/ProdutoData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../components/ui/Button";
import PageHeader from "../components/PageHeader";

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
    <div>
      <PageHeader
        title="Produtos"
        subtitle={data ? `${data.length} cadastrado(s)` : undefined}
        action={
          <Button onClick={abrirNovo}>
            <FontAwesomeIcon icon={faPlus} />
            Novo produto
          </Button>
        }
      />

      {data && data.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-300 bg-white py-16 text-center text-sm text-slate-400">
          Nenhum produto cadastrado ainda.
        </div>
      ) : (
        <div className="grid gap-5 [grid-template-columns:repeat(auto-fill,minmax(280px,1fr))]">
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
        </div>
      )}

      {isModalOpen && (
        <ModalProduto closeModal={fecharModal} produto={produtoSelecionado} />
      )}
    </div>
  );
};

export default Produtos;
