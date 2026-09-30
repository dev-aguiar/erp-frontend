import axios, { AxiosPromise } from "axios";
import { useQuery } from "@tanstack/react-query";
import { ItemPedidoData } from "../interfaces/ItemPedidoData";

const API_URL = import.meta.env.VITE_API_URL;

const fetchData = async (
  pedidoId: number
): AxiosPromise<ItemPedidoData[]> => {
  const response = axios.get(API_URL + "/pedidos/" + pedidoId + "/itens");
  return response;
};

export function useItemPedidoData(pedidoId: number) {
  const query = useQuery({
    queryFn: () => fetchData(pedidoId),
    queryKey: ["itemPedido-data", pedidoId],
    enabled: !!pedidoId,
    retry: 2,
  });

  return {
    ...query,
    data: query.data?.data,
  };
}
