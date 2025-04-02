import { PedidoData } from "./PedidoData";

export interface ClienteData {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  endereco: string;
  pedidos: PedidoData;
}

export interface ClienteRef {
  id: number;
}
