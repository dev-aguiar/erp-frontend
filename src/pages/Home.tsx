import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxOpen,
  faUsers,
  faShoppingCart,
  faUser,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { useProdutoData } from "../hooks/useProdutoData";
import { useClienteData } from "../hooks/useClienteData";
import { usePedidoData } from "../hooks/usePedidoData";
import { useVendedorData } from "../hooks/useVendedorData";
import PageHeader from "../components/PageHeader";

interface Kpi {
  label: string;
  count?: number;
  to: string;
  icon: IconDefinition;
  iconBg: string;
  iconText: string;
}

const Home = () => {
  const { data: produtos } = useProdutoData();
  const { data: clientes } = useClienteData();
  const { data: pedidos } = usePedidoData();
  const { data: vendedores } = useVendedorData();

  const kpis: Kpi[] = [
    {
      label: "Produtos",
      count: produtos?.length,
      to: "/produtos",
      icon: faBoxOpen,
      iconBg: "bg-indigo-50",
      iconText: "text-indigo-600",
    },
    {
      label: "Clientes",
      count: clientes?.length,
      to: "/clientes",
      icon: faUsers,
      iconBg: "bg-emerald-50",
      iconText: "text-emerald-600",
    },
    {
      label: "Pedidos",
      count: pedidos?.length,
      to: "/pedidos",
      icon: faShoppingCart,
      iconBg: "bg-amber-50",
      iconText: "text-amber-600",
    },
    {
      label: "Vendedores",
      count: vendedores?.length,
      to: "/vendedores",
      icon: faUser,
      iconBg: "bg-sky-50",
      iconText: "text-sky-600",
    },
  ];

  const ultimosPedidos = pedidos
    ? [...pedidos].sort((a, b) => b.id - a.id).slice(0, 5)
    : [];

  return (
    <div>
      <PageHeader title="Bem-vindo(a) ao ERP" subtitle="Visão geral do sistema" />

      <div className="grid gap-5 [grid-template-columns:repeat(auto-fill,minmax(220px,1fr))]">
        {kpis.map((kpi) => (
          <Link
            key={kpi.to}
            to={kpi.to}
            className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-indigo-300 hover:shadow-md"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-slate-500">{kpi.label}</p>
                <p className="mt-1 text-3xl font-bold text-slate-900">
                  {kpi.count ?? "—"}
                </p>
              </div>
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl ${kpi.iconBg} ${kpi.iconText}`}
              >
                <FontAwesomeIcon icon={kpi.icon} className="text-lg" />
              </div>
            </div>
            <p className="mt-4 flex items-center gap-1 text-xs font-medium text-indigo-600">
              Acessar
              <FontAwesomeIcon
                icon={faArrowRight}
                className="transition group-hover:translate-x-0.5"
              />
            </p>
          </Link>
        ))}
      </div>

      <div className="mt-8 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
          <h2 className="text-sm font-semibold text-slate-900">
            Últimos pedidos
          </h2>
          <Link
            to="/pedidos"
            className="flex items-center gap-1 text-xs font-medium text-indigo-600 hover:text-indigo-700"
          >
            Ver todos
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>

        {ultimosPedidos.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-100 text-left text-xs uppercase tracking-wide text-slate-400">
                  <th className="px-5 py-3 font-medium">Pedido</th>
                  <th className="px-5 py-3 font-medium">Cliente</th>
                  <th className="px-5 py-3 font-medium">Data</th>
                  <th className="px-5 py-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {ultimosPedidos.map((pedido) => (
                  <tr
                    key={pedido.id}
                    className="border-b border-slate-50 last:border-0 hover:bg-slate-50"
                  >
                    <td className="px-5 py-3 font-medium text-slate-900">
                      #{pedido.id}
                    </td>
                    <td className="px-5 py-3 text-slate-600">
                      {pedido.cliente.nome}
                    </td>
                    <td className="px-5 py-3 text-slate-600">
                      {new Date(
                        pedido.dataPedido + "T00:00:00"
                      ).toLocaleDateString()}
                    </td>
                    <td className="px-5 py-3">
                      <span className="rounded-full bg-indigo-50 px-2 py-0.5 text-xs font-medium text-indigo-700">
                        {pedido.statusPedido}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="px-5 py-10 text-center text-sm text-slate-400">
            Nenhum pedido ainda.
          </p>
        )}
      </div>
    </div>
  );
};

export default Home;
