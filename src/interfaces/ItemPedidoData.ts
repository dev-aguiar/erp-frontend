import { PedidoData } from "./PedidoData";
import { ProdutoData } from "./ProdutoData";

export interface ItemPedidoData {
  id: number;
  pedido: PedidoData;
  produto: ProdutoData;
  quantidade: number;
  valorUnitario: number;
}
