import axios, { AxiosPromise } from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PedidoData } from "../interfaces/PedidoData";

const API_URL = import.meta.env.VITE_API_URL;

const postData = async (data: PedidoData): AxiosPromise<any> => {
  const response = axios.post(API_URL + "/pedidos", data);
  return response;
};

export function usePedidoDataMutate() {
  const queryClient = useQueryClient();
  const mutate = useMutation({
    mutationFn: postData,
    retry: 2,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pedido-data"] });
    },
  });

  return mutate;
}
