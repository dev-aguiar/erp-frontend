import axios, { AxiosPromise } from "axios";
import { useQuery } from "@tanstack/react-query";
import { ItemPedidoData } from "../interfaces/ItemPedidoData";

const API_URL = "http://localhost:8080";

const fetchData = async (): AxiosPromise<ItemPedidoData[]> => {
  const response = axios.get(API_URL + "/item-pedidos");
  return response;
};

export function useItemPedidoData() {
  const query = useQuery({
    queryFn: fetchData,
    queryKey: ["itemPedido-data"],
    retry: 2,
  });

  return {
    ...query,
    data: query.data?.data,
  };
}
