import axios, { AxiosPromise } from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ItemPedidoData } from "../interfaces/ItemPedidoData";

const API_URL = "http://localhost:8080";

const postData = async (data: ItemPedidoData): AxiosPromise<any> => {
  const response = axios.post(API_URL + "/item-pedido", data);
  return response;
};

export function useItemPedidoDataMutate() {
  const queryClient = useQueryClient();
  const mutate = useMutation({
    mutationFn: postData,
    retry: 2,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["itemPedido-data"] });
    },
  });

  return mutate;
}
