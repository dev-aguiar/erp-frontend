import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Menu from "./components/Menu";
import Contato from "./pages/Contato";
import Footer from "./components/Footer";
import Produtos from "./pages/Produtos";
import Clientes from "./pages/Clientes";
import Pedidos from "./pages/Pedidos";
import Vendedores from "./pages/Vendedores";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Menu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/pedidos" element={<Pedidos />} />
        <Route path="/pedido" element={<Pedidos />} />
        <Route path="/vendedores" element={<Vendedores />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
