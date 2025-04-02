import axios, { AxiosPromise } from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { VendedorData } from "../interfaces/VendedorData";

const API_URL = "http://localhost:8080";

const postData = async (data: VendedorData): AxiosPromise<any> => {
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
