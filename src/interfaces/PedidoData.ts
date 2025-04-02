import { ItemPedidoData } from "./ItemPedidoData";

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
  dataPedido: Date;
  formaPagamento: string;
  statusPedido: string;
  itens: ItemPedidoData[];
}
