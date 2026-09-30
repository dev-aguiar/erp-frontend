import axios, { AxiosPromise } from "axios";
import { useQuery } from "@tanstack/react-query";
import { VendedorData } from "../interfaces/VendedorData";

const API_URL = import.meta.env.VITE_API_URL;

const fetchData = async (): AxiosPromise<VendedorData[]> => {
  const response = axios.get(API_URL + "/vendedores");
  return response;
};

export function useVendedorData() {
  const query = useQuery({
    queryFn: fetchData,
    queryKey: ["vendedor-data"],
    retry: 2,
  });

  return {
    ...query,
    data: query.data?.data,
  };
}
