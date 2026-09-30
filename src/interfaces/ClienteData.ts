import { PedidoResumido } from "./PedidoData";

export interface ClienteData {
  id: number;
  nome: string;
  email: string;
  telefone: string;
  endereco: string;
  pedidos: PedidoResumido[];
}

export interface ClienteRequest {
  nome: string;
  email: string;
  telefone: string;
  endereco: string;
}
