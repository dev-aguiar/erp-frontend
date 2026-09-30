import { useState } from "react";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PedidoCard } from "../components/cards/PedidoCard";
import { usePedidoData } from "../hooks/usePedidoData";
import { usePedidoDataDelete } from "../hooks/usePedidoDataMutate";
import { ModalPedido } from "../modals/ModalPedido";
import { ModalAdicionarProduto } from "../modals/ModalAdicionarProduto";
import { PedidoData } from "../interfaces/PedidoData";

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
    <div className="pedidos">
      <h2 className="pedidos__header">Pedidos</h2>
      <div className="pedidos__card">
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

        {isPedidoModalOpen && (
          <ModalPedido
            closeModal={fecharPedidoModal}
            pedido={pedidoParaEditar}
          />
        )}

        {isProdutoModalOpen && pedidoSelecionado && (
          <ModalAdicionarProduto
            pedidoId={pedidoSelecionado}
            closeModal={closeProdutoModal}
          />
        )}

        <FontAwesomeIcon
          className="open__modal-button"
          icon={faCartPlus}
          onClick={abrirNovoPedido}
        />
      </div>
    </div>
  );
};

export default Pedidos;
