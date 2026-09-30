import { useEffect, useState } from "react";
import {
  usePedidoDataMutate,
  usePedidoDataUpdate,
} from "../hooks/usePedidoDataMutate";
import { PedidoData, PedidoRequest } from "../interfaces/PedidoData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { DateInput, SelectInput } from "../components/inputs/Input";
import { FormaPagamento } from "../enums/FormaPagamento";
import { StatusPedido } from "../enums/StatusPedido";
import { useClienteData } from "../hooks/useClienteData";
import { useVendedorData } from "../hooks/useVendedorData";

interface ModalProps {
  closeModal(): void;
  pedido?: PedidoData;
}

export function ModalPedido({ closeModal, pedido }: ModalProps) {
  const isEdit = !!pedido;

  const [clienteId, setClienteId] = useState<string>(
    pedido ? String(pedido.cliente.id) : ""
  );
  const [vendedorId, setVendedorId] = useState<string>(
    pedido ? String(pedido.vendedor.id) : ""
  );
  const [formaPagamento, setFormaPagamento] = useState<string>(
    pedido?.formaPagamento ?? Object.values(FormaPagamento)[0] ?? ""
  );
  const [statusPedido, setStatusPedido] = useState<string>(
    pedido?.statusPedido ?? Object.values(StatusPedido)[0] ?? ""
  );
  const [dataPedido, setDataPedido] = useState<string>(
    pedido?.dataPedido ?? new Date().toISOString().split("T")[0]
  );

  const { mutate, isSuccess, isPending } = usePedidoDataMutate();
  const {
    mutate: update,
    isSuccess: isUpdateSuccess,
    isPending: isUpdatePending,
  } = usePedidoDataUpdate();
  const { data: clientesData } = useClienteData();
  const { data: vendedoresData } = useVendedorData();

  useEffect(() => {
    if (isSuccess || isUpdateSuccess) {
      closeModal();
    }
  }, [isSuccess, isUpdateSuccess, closeModal]);

  const submit = () => {
    if (!clienteId || !vendedorId) {
      alert("Selecione um cliente e um vendedor.");
      return;
    }

    const data: PedidoRequest = {
      clienteId: Number(clienteId),
      vendedorId: Number(vendedorId),
      dataPedido,
      formaPagamento,
      statusPedido,
    };

    if (isEdit && pedido) {
      update({ id: pedido.id, data });
    } else {
      mutate(data);
    }
  };

  return (
    <div className="modal__container">
      <div className="modal__container-body">
        <div className="modal__container-header">
          {isEdit ? "Editar pedido" : "Novo pedido"}
          <FontAwesomeIcon icon={faXmark} onClick={closeModal} />
        </div>
        <form className="modal__form">
          <SelectInput
            label="Cliente"
            value={clienteId}
            updateValue={setClienteId}
            options={
              clientesData && clientesData.length > 0
                ? clientesData.map((cliente) => String(cliente.id))
                : []
            }
          />
          <SelectInput
            label="Vendedor"
            value={vendedorId}
            updateValue={setVendedorId}
            options={
              vendedoresData && vendedoresData.length > 0
                ? vendedoresData.map((vendedor) => String(vendedor.id))
                : []
            }
          />
          <SelectInput
            label="Forma de Pagamento"
            value={formaPagamento}
            updateValue={setFormaPagamento}
            options={Object.values(FormaPagamento)}
          />
          <DateInput
            label="Data do Pedido"
            value={dataPedido}
            updateValue={setDataPedido}
          />
          <SelectInput
            label="Status do Pedido"
            value={statusPedido}
            updateValue={setStatusPedido}
            options={Object.values(StatusPedido)}
          />
        </form>
        <button onClick={submit} className="modal__form-btn">
          {isPending || isUpdatePending ? "Salvando..." : "Salvar"}
        </button>
      </div>
    </div>
  );
}
