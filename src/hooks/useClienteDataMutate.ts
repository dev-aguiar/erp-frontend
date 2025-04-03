import axios, { AxiosPromise } from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ClienteData } from "../interfaces/ClienteData";

const API_URL = import.meta.env.VITE_API_URL;

const postData = async (data: ClienteData): AxiosPromise<any> => {
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
