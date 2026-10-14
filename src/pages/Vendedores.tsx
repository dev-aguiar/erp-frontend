import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { VendedorCard } from "../components/cards/VendedorCard";
import { useVendedorData } from "../hooks/useVendedorData";
import { useVendedorDataDelete } from "../hooks/usevendedorDataMutate";
import { ModalVendedor } from "../modals/ModalVendedor";
import { VendedorData } from "../interfaces/VendedorData";
import { Button } from "../components/ui/Button";
import PageHeader from "../components/PageHeader";

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
    <div>
      <PageHeader
        title="Vendedores"
        subtitle={data ? `${data.length} cadastrado(s)` : undefined}
        action={
          <Button onClick={abrirNovo}>
            <FontAwesomeIcon icon={faPlus} />
            Novo vendedor
          </Button>
        }
      />

      {data && data.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-300 bg-white py-16 text-center text-sm text-slate-400">
          Nenhum vendedor cadastrado ainda.
        </div>
      ) : (
        <div className="grid gap-5 [grid-template-columns:repeat(auto-fill,minmax(280px,1fr))]">
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
        </div>
      )}

      {isModalOpen && (
        <ModalVendedor closeModal={fecharModal} vendedor={vendedorSelecionado} />
      )}
    </div>
  );
};

export default Vendedores;
