import { useState } from "react";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PedidoCard } from "../components/cards/PedidoCard";
import { usePedidoData } from "../hooks/usePedidoData";
import { ModalPedido } from "../modals/ModalPedido";
import { ModalAdicionarProduto } from "../modals/ModalAdicionarProduto";

const Pedidos = () => {
  const { data: pedidos } = usePedidoData();

  const [isPedidoModalOpen, setPedidoModalOpen] = useState(false);
  const [isProdutoModalOpen, setProdutoModalOpen] = useState(false);
  const [pedidoSelecionado, setPedidoSelecionado] = useState<number | null>(
    null
  );

  const togglePedidoModal = () => {
    setPedidoModalOpen((prev) => !prev);
  };

  const openProdutoModal = (pedidoId: number) => {
    setPedidoSelecionado(pedidoId);
    setProdutoModalOpen(true);
  };

  const closeProdutoModal = () => {
    setProdutoModalOpen(false);
    setPedidoSelecionado(null);
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
          />
        ))}

        {isPedidoModalOpen && <ModalPedido closeModal={togglePedidoModal} />}

        {isProdutoModalOpen && pedidoSelecionado && (
          <ModalAdicionarProduto
            pedidoId={pedidoSelecionado}
            closeModal={closeProdutoModal}
          />
        )}

        <FontAwesomeIcon
          className="open__modal-button"
          icon={faCartPlus}
          onClick={togglePedidoModal}
        />
      </div>
    </div>
  );
};

export default Pedidos;
