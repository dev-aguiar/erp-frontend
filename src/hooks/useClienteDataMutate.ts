import axios, { AxiosPromise } from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ClienteRequest } from "../interfaces/ClienteData";

const API_URL = import.meta.env.VITE_API_URL;

const postData = async (data: ClienteRequest): AxiosPromise<any> => {
  const response = axios.post(API_URL + "/clientes", data);
  return response;
};

export function useClienteDataMutate() {
  const queryClient = useQueryClient();
  const mutate = useMutation({
    mutationFn: postData,
    retry: 2,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cliente-data"] });
    },
  });

  return mutate;
}

const updateData = async (payload: {
  id: number;
  data: ClienteRequest;
}): AxiosPromise<any> => {
  const response = axios.put(
    API_URL + "/clientes/" + payload.id,
    payload.data
  );
  return response;
};

export function useClienteDataUpdate() {
  const queryClient = useQueryClient();
  const mutate = useMutation({
    mutationFn: updateData,
    retry: 2,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cliente-data"] });
    },
  });

  return mutate;
}

const deleteData = async (id: number): AxiosPromise<void> => {
  const response = axios.delete(API_URL + "/clientes/" + id);
  return response;
};

export function useClienteDataDelete() {
  const queryClient = useQueryClient();
  const mutate = useMutation({
    mutationFn: deleteData,
    retry: 2,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cliente-data"] });
    },
  });

  return mutate;
}
