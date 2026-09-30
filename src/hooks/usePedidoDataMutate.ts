import axios, { AxiosPromise } from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PedidoRequest } from "../interfaces/PedidoData";

const API_URL = import.meta.env.VITE_API_URL;

const postData = async (data: PedidoRequest): AxiosPromise<any> => {
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

const updateData = async (payload: {
  id: number;
  data: PedidoRequest;
}): AxiosPromise<any> => {
  const response = axios.put(API_URL + "/pedidos/" + payload.id, payload.data);
  return response;
};

export function usePedidoDataUpdate() {
  const queryClient = useQueryClient();
  const mutate = useMutation({
    mutationFn: updateData,
    retry: 2,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pedido-data"] });
    },
  });

  return mutate;
}

const deleteData = async (id: number): AxiosPromise<void> => {
  const response = axios.delete(API_URL + "/pedidos/" + id);
  return response;
};

export function usePedidoDataDelete() {
  const queryClient = useQueryClient();
  const mutate = useMutation({
    mutationFn: deleteData,
    retry: 2,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pedido-data"] });
    },
  });

  return mutate;
}
