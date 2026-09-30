import axios, { AxiosPromise } from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const API_URL = import.meta.env.VITE_API_URL;

export interface AdicionarProdutoPedidoRequest {
  pedidoId: number;
  produtoId: number;
  quantidade: number;
}

const postData = async (
  data: AdicionarProdutoPedidoRequest
): AxiosPromise<string> => {
  const response = axios.post(API_URL + "/pedidos/adicionar-produto", data);
  return response;
};

export function useAdicionarProdutoPedido() {
  const queryClient = useQueryClient();
  const mutate = useMutation({
    mutationFn: postData,
    retry: 2,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pedido-data"] });
      queryClient.invalidateQueries({ queryKey: ["produto-data"] });
    },
  });

  return mutate;
}
