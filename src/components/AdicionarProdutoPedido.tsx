import { useEffect, useState } from "react";
import axios from "axios";

interface Produto {
  id: number;
  nome: string;
  valor: number;
}

interface AdicionarProdutoProps {
  pedidoId: number;
  closeModal: () => void;
}

const AdicionarProduto = ({ pedidoId, closeModal }: AdicionarProdutoProps) => {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [produtoSelecionado, setProdutoSelecionado] = useState<number | null>(
    null
  );
  const [quantidade, setQuantidade] = useState<number>(1);

  useEffect(() => {
    axios
      .get("http://localhost:8080/produtos")
      .then((res) => setProdutos(res.data))
      .catch((err) => console.error("Erro ao buscar produtos:", err));
  }, []);

  const adicionarProduto = async () => {
    if (produtoSelecionado && quantidade > 0) {
      try {
        await axios.post(`http://localhost:8080/pedidos/${pedidoId}/produtos`, {
          produtoId: produtoSelecionado,
          quantidade,
        });
        alert("Produto adicionado com sucesso!");
        closeModal();
        window.location.reload();
      } catch (error) {
        console.error("Erro ao adicionar produto ao pedido:", error);
        alert("Erro ao adicionar produto. Tente novamente.");
      }
    }
  };

  return (
    <div>
      <h2>Adicionar Produto ao Pedido</h2>
      <select
        onChange={(produtoSelecionado) =>
          setProdutoSelecionado(Number(produtoSelecionado.target.value))
        }
      >
        <option value="">Selecione um produto</option>
        {produtos.map((produto) => (
          <option key={produto.id} value={produto.id}>
            {produto.nome} - R$ {produto.valor.toFixed(2)}
          </option>
        ))}
      </select>
      <input
        type="number"
        value={quantidade}
        onChange={(e) => setQuantidade(Number(e.target.value))}
        min="1"
      />
      <button onClick={adicionarProduto}>Adicionar</button>
    </div>
  );
};

export default AdicionarProduto;
