import axios, { AxiosPromise } from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { VendedorRequest } from "../interfaces/VendedorData";

const API_URL = import.meta.env.VITE_API_URL;

const postData = async (data: VendedorRequest): AxiosPromise<any> => {
  const response = axios.post(API_URL + "/vendedores", data);
  return response;
};

export function useVendedorDataMutate() {
  const queryClient = useQueryClient();
  const mutate = useMutation({
    mutationFn: postData,
    retry: 2,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["vendedor-data"] });
    },
  });

  return mutate;
}

const updateData = async (payload: {
  id: number;
  data: VendedorRequest;
}): AxiosPromise<any> => {
  const response = axios.put(
    API_URL + "/vendedores/" + payload.id,
    payload.data
  );
  return response;
};

export function useVendedorDataUpdate() {
  const queryClient = useQueryClient();
  const mutate = useMutation({
    mutationFn: updateData,
    retry: 2,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["vendedor-data"] });
    },
  });

  return mutate;
}

const deleteData = async (id: number): AxiosPromise<void> => {
  const response = axios.delete(API_URL + "/vendedores/" + id);
  return response;
};

export function useVendedorDataDelete() {
  const queryClient = useQueryClient();
  const mutate = useMutation({
    mutationFn: deleteData,
    retry: 2,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["vendedor-data"] });
    },
  });

  return mutate;
}
