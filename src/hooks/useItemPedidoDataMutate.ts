import axios, { AxiosPromise } from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const API_URL = import.meta.env.VITE_API_URL;

export interface ItemPedidoRequest {
  pedidoId: number;
  produtoId: number;
  quantidade: number;
  valorUnitario: number;
}

const postData = async (data: ItemPedidoRequest): AxiosPromise<any> => {
  const response = axios.post(
    API_URL + "/pedidos/" + data.pedidoId + "/itens",
    data
  );
  return response;
};

export function useItemPedidoDataMutate() {
  const queryClient = useQueryClient();
  const mutate = useMutation({
    mutationFn: postData,
    retry: 2,
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["itemPedido-data", variables.pedidoId],
      });
    },
  });

  return mutate;
}
