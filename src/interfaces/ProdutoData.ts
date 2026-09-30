export interface ProdutoData {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
}

export interface ProdutoRequest {
  nome: string;
  preco: number;
  quantidade: number;
}
