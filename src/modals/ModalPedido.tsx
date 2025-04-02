import { useEffect, useState } from "react";
import { usePedidoDataMutate } from "../hooks/usePedidoDataMutate";
import { PedidoData } from "../interfaces/PedidoData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { DateInput, SelectInput } from "../components/inputs/Input";
import { FormaPagamento } from "../enums/FormaPagamento";
import { StatusPedido } from "../enums/StatusPedido";
import { useClienteData } from "../hooks/useClienteData";
import { useVendedorData } from "../hooks/useVendedorData";

interface ModalProps {
  closeModal(): void;
}

export function ModalPedido({ closeModal }: ModalProps) {
  const [clienteId, setClienteId] = useState<string>("");
  const [vendedorId, setVendedorId] = useState<string>("");

  const [formaPagamento, setFormaPagamento] = useState<string>(
    Object.values(FormaPagamento)[0] || ""
  );
  const [statusPedido, setStatusPedido] = useState<string>(
    Object.values(StatusPedido)[0] || ""
  );

  const [dataPedido, setDataPedido] = useState<Date>(new Date());

  const [clientes, setClientes] = useState<{ id: string; nome: string }[]>([]);
  const [vendedores, setVendedores] = useState<{ id: string; nome: string }[]>(
    []
  );

  const { mutate, isSuccess, isPending } = usePedidoDataMutate();
  const { data: clientesData } = useClienteData();
  const { data: vendedoresData } = useVendedorData();

  useEffect(() => {
    if (isSuccess) {
      closeModal();
    }
  }, [isSuccess, closeModal]);

  useEffect(() => {
    if (clientesData) {
      setClientes(
        clientesData.map((cliente) => ({
          id: cliente.id.toString(),
          nome: cliente.nome,
        }))
      );
    }
    if (vendedoresData) {
      setVendedores(
        vendedoresData.map((vendedor) => ({
          id: vendedor.id.toString(),
          nome: vendedor.nome,
        }))
      );
    }
  }, [clientesData, vendedoresData]);

  const submit = () => {
    if (!clienteId || !vendedorId) {
      alert("Selecione um cliente e um vendedor.");
      return;
    }

    const pedidoData: PedidoData = {
      id: 0,
      clienteId: Number(clienteId),
      vendedorId: Number(vendedorId),
      dataPedido,
      formaPagamento: formaPagamento,
      statusPedido: statusPedido as StatusPedido,
    };

    console.log(pedidoData);
    mutate(pedidoData);
  };

  return (
    <div className="modal__container">
      <div className="modal__container-body">
        <div className="modal__container-header">
          Novo pedido
          <FontAwesomeIcon icon={faXmark} onClick={closeModal} />
        </div>
        <form className="modal__form">
          <SelectInput
            label="Cliente"
            value={clienteId}
            updateValue={setClienteId}
            options={
              clientes.length > 0
                ? clientes.map((cliente) => cliente.id)
                : ["Nenhum cliente cadastrado"]
            }
          />
          <SelectInput
            label="Vendedor"
            value={vendedorId}
            updateValue={setVendedorId}
            options={
              vendedores.length > 0
                ? vendedores.map((vendedor) => vendedor.id)
                : ["Sem vendedores cadastrados"]
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
            value={dataPedido.toISOString().split("T")[0]}
            updateValue={(dateString: string) =>
              setDataPedido(new Date(dateString))
            }
          />
          <SelectInput
            label="Status do Pedido"
            value={statusPedido}
            updateValue={setStatusPedido}
            options={Object.values(StatusPedido)}
          />
        </form>
        <button onClick={submit} className="modal__form-btn">
          {isPending ? "Salvando..." : "Salvar"}
        </button>
      </div>
    </div>
  );
}
