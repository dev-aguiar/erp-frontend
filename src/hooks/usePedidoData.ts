import axios, { AxiosPromise } from "axios";
import { useQuery } from "@tanstack/react-query";
import { PedidoData } from "../interfaces/PedidoData";

const API_URL = "http://localhost:8080";

const fetchData = async (): AxiosPromise<PedidoData[]> => {
  const response = axios.get(API_URL + "/pedidos");
  return response;
};

export function usePedidoData() {
  const query = useQuery({
    queryFn: fetchData,
    queryKey: ["pedido-data"],
    retry: 2,
  });

  return {
    ...query,
    data: query.data?.data,
  };
}
