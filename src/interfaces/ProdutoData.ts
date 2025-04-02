import { ItemPedidoData } from "./ItemPedidoData";

export interface ProdutoData {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
  itens: ItemPedidoData;
}
