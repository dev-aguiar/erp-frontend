import axios, { AxiosPromise } from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ProdutoRequest } from "../interfaces/ProdutoData";

const API_URL = import.meta.env.VITE_API_URL;

const postData = async (data: ProdutoRequest): AxiosPromise<any> => {
  const response = axios.post(API_URL + "/produtos", data);
  return response;
};

export function useProdutoDataMutate() {
  const queryClient = useQueryClient();
  const mutate = useMutation({
    mutationFn: postData,
    retry: 2,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["produto-data"] });
    },
  });

  return mutate;
}

const updateData = async (payload: {
  id: number;
  data: ProdutoRequest;
}): AxiosPromise<any> => {
  const response = axios.put(
    API_URL + "/produtos/" + payload.id,
    payload.data
  );
  return response;
};

export function useProdutoDataUpdate() {
  const queryClient = useQueryClient();
  const mutate = useMutation({
    mutationFn: updateData,
    retry: 2,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["produto-data"] });
    },
  });

  return mutate;
}

const deleteData = async (id: number): AxiosPromise<void> => {
  const response = axios.delete(API_URL + "/produtos/" + id);
  return response;
};

export function useProdutoDataDelete() {
  const queryClient = useQueryClient();
  const mutate = useMutation({
    mutationFn: deleteData,
    retry: 2,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["produto-data"] });
    },
  });

  return mutate;
}
