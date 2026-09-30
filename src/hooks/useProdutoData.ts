import axios, { AxiosPromise } from "axios";
import { useQuery } from "@tanstack/react-query";
import { ProdutoData } from "../interfaces/ProdutoData";

const API_URL = import.meta.env.VITE_API_URL;

const fetchData = async (): AxiosPromise<ProdutoData[]> => {
  const response = axios.get(API_URL + "/produtos");
  return response;
};

export function useProdutoData() {
  const query = useQuery({
    queryFn: fetchData,
    queryKey: ["produto-data"],
    retry: 2,
  });

  return {
    ...query,
    data: query.data?.data,
  };
}
