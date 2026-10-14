import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCubes } from "@fortawesome/free-solid-svg-icons";
import Home from "./pages/Home";
import Contato from "./pages/Contato";
import Produtos from "./pages/Produtos";
import Clientes from "./pages/Clientes";
import Pedidos from "./pages/Pedidos";
import Vendedores from "./pages/Vendedores";
import Login from "./pages/Login";
import Sidebar from "./components/Sidebar";
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AppLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <PrivateRoute>
      <div className="min-h-screen bg-slate-50 font-sans">
        <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        <div className="flex min-h-screen flex-col lg:pl-64">
          {/* Topbar (mobile) */}
          <header className="flex items-center gap-3 border-b border-slate-200 bg-white px-4 py-3 lg:hidden">
            <button
              onClick={() => setSidebarOpen(true)}
              className="text-slate-600"
              aria-label="Abrir menu"
            >
              <FontAwesomeIcon icon={faBars} className="text-lg" />
            </button>
            <span className="flex items-center gap-2 text-sm font-semibold text-slate-900">
              <FontAwesomeIcon icon={faCubes} className="text-indigo-600" />
              ERP Dev Aguiar
            </span>
          </header>

          <main className="flex-1 p-4 sm:p-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/produtos" element={<Produtos />} />
              <Route path="/clientes" element={<Clientes />} />
              <Route path="/pedidos" element={<Pedidos />} />
              <Route path="/pedido" element={<Pedidos />} />
              <Route path="/vendedores" element={<Vendedores />} />
              <Route path="/contato" element={<Contato />} />
            </Routes>
          </main>

          <footer className="border-t border-slate-200 px-6 py-4 text-center text-xs text-slate-400">
            Criado por André Aguiar · 2025
          </footer>
        </div>
      </div>
    </PrivateRoute>
  );
}

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<AppLayout />} />
        </Routes>

        <ToastContainer position="top-right" autoClose={3000} />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
