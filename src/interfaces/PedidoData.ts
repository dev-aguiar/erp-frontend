export interface PedidoData {
  id: number;
  cliente: {
    id: number;
    nome: string;
  };
  vendedor: {
    id: number;
    nome: string;
  };
  dataPedido: string;
  formaPagamento: string;
  statusPedido: string;
}

export interface PedidoResumido {
  id: number;
  dataPedido: string;
  statusPedido: string;
}

export interface PedidoRequest {
  clienteId: number;
  vendedorId: number;
  dataPedido: string;
  statusPedido: string;
  formaPagamento: string;
}
