import { useState } from "react";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PedidoCard } from "../components/cards/PedidoCard";
import { usePedidoData } from "../hooks/usePedidoData";
import { usePedidoDataDelete } from "../hooks/usePedidoDataMutate";
import { ModalPedido } from "../modals/ModalPedido";
import { ModalAdicionarProduto } from "../modals/ModalAdicionarProduto";
import { PedidoData } from "../interfaces/PedidoData";
import { Button } from "../components/ui/Button";
import PageHeader from "../components/PageHeader";

const Pedidos = () => {
  const { data: pedidos } = usePedidoData();
  const { mutate: excluir } = usePedidoDataDelete();

  const [isPedidoModalOpen, setPedidoModalOpen] = useState(false);
  const [isProdutoModalOpen, setProdutoModalOpen] = useState(false);
  const [pedidoSelecionado, setPedidoSelecionado] = useState<number | null>(
    null
  );
  const [pedidoParaEditar, setPedidoParaEditar] = useState<
    PedidoData | undefined
  >(undefined);

  const abrirNovoPedido = () => {
    setPedidoParaEditar(undefined);
    setPedidoModalOpen(true);
  };

  const abrirEdicaoPedido = (pedido: PedidoData) => {
    setPedidoParaEditar(pedido);
    setPedidoModalOpen(true);
  };

  const fecharPedidoModal = () => {
    setPedidoModalOpen(false);
    setPedidoParaEditar(undefined);
  };

  const openProdutoModal = (pedidoId: number) => {
    setPedidoSelecionado(pedidoId);
    setProdutoModalOpen(true);
  };

  const closeProdutoModal = () => {
    setProdutoModalOpen(false);
    setPedidoSelecionado(null);
  };

  const handleExcluir = (id: number) => {
    if (window.confirm("Deseja excluir este pedido?")) {
      excluir(id);
    }
  };

  return (
    <div>
      <PageHeader
        title="Pedidos"
        subtitle={pedidos ? `${pedidos.length} cadastrado(s)` : undefined}
        action={
          <Button onClick={abrirNovoPedido}>
            <FontAwesomeIcon icon={faPlus} />
            Novo pedido
          </Button>
        }
      />

      {pedidos && pedidos.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-300 bg-white py-16 text-center text-sm text-slate-400">
          Nenhum pedido cadastrado ainda.
        </div>
      ) : (
        <div className="grid gap-5 [grid-template-columns:repeat(auto-fill,minmax(400px,1fr))]">
          {pedidos?.map((pedido) => (
            <PedidoCard
              key={pedido.id}
              id={pedido.id}
              cliente={pedido.cliente}
              vendedor={pedido.vendedor}
              dataPedido={pedido.dataPedido}
              formaPagamento={pedido.formaPagamento}
              statusPedido={pedido.statusPedido}
              onAdicionarProduto={openProdutoModal}
              onEditar={() => abrirEdicaoPedido(pedido)}
              onExcluir={() => handleExcluir(pedido.id)}
            />
          ))}
        </div>
      )}

      {isPedidoModalOpen && (
        <ModalPedido closeModal={fecharPedidoModal} pedido={pedidoParaEditar} />
      )}

      {isProdutoModalOpen && pedidoSelecionado && (
        <ModalAdicionarProduto
          pedidoId={pedidoSelecionado}
          closeModal={closeProdutoModal}
        />
      )}
    </div>
  );
};

export default Pedidos;
