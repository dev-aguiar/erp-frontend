import axios, { AxiosPromise } from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ProdutoData } from "../interfaces/ProdutoData";

const API_URL = "http://localhost:8080";

const postData = async (data: ProdutoData): AxiosPromise<any> => {
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
