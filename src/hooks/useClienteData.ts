import axios, { AxiosPromise } from "axios";
import { useQuery } from "@tanstack/react-query";
import { ClienteData } from "../interfaces/ClienteData";

const API_URL = import.meta.env.VITE_API_URL;

const fetchData = async (): AxiosPromise<ClienteData[]> => {
  const response = axios.get(API_URL + "/clientes");
  return response;
};

export function useClienteData() {
  const query = useQuery({
    queryFn: fetchData,
    queryKey: ["cliente-data"],
    retry: 2,
  });

  return {
    ...query,
    data: query.data?.data,
  };
}
