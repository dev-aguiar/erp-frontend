import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCubes,
	faCheck,
	faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../context/AuthContext";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
	const [login, setLogin] = useState("");
	const [senha, setSenha] = useState("");

	const navigate = useNavigate();
	const { login: salvarSessao } = useAuth();
	const { mutate: autenticar, isPending } = useLogin();

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();

		if (!login || !senha) {
			toast.error("Preencha o login e a senha.");
			return;
		}

		autenticar(
			{ login, senha },
			{
				onSuccess: (response) => {
					salvarSessao(response.data.token);
					toast.success("Login realizado com sucesso!");
					navigate("/");
				},
				onError: () => {
					toast.error("Login ou senha inválidos.");
				},
			}
		);
	};

	return (
		<div className="flex min-h-screen font-sans">
			{/* Painel da marca (desktop) */}
			<aside className="hidden w-1/2 flex-col justify-between bg-gradient-to-br from-indigo-600 to-indigo-900 p-12 text-white lg:flex">
				<div className="flex items-center gap-3">
					<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/15">
						<FontAwesomeIcon icon={faCubes} className="text-lg" />
					</div>
					<span className="text-lg font-semibold tracking-tight">
            ERP Dev Aguiar
          </span>
				</div>

				<div className="max-w-md">
					<h2 className="text-3xl font-bold leading-tight">
						Gestão simples para o seu negócio.
					</h2>
					<p className="mt-4 text-indigo-100">
						Controle produtos, clientes, vendedores e pedidos em um só lugar.
					</p>

					<ul className="mt-8 space-y-3 text-sm text-indigo-100">
						{[
							"Controle de estoque automático",
							"Pedidos e itens integrados",
							"Acesso seguro com autenticação",
						].map((item) => (
							<li key={item} className="flex items-center gap-3">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/15">
                  <FontAwesomeIcon icon={faCheck} className="text-[10px]" />
                </span>
								{item}
							</li>
						))}
					</ul>
				</div>

				<p className="text-xs text-indigo-200">
					© {new Date().getFullYear()} ERP Dev Aguiar
				</p>
			</aside>

			{/* Formulário */}
			<main className="flex w-full items-center justify-center bg-slate-50 p-6 lg:w-1/2">
				<div className="w-full max-w-sm">
					{/* Marca no mobile */}
					<div className="mb-8 flex items-center gap-3 lg:hidden">
						<div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-white">
							<FontAwesomeIcon icon={faCubes} className="text-lg" />
						</div>
						<span className="text-lg font-semibold tracking-tight text-slate-900">
              ERP Dev Aguiar
            </span>
					</div>

					<h1 className="text-2xl font-bold text-slate-900">
						Bem-vindo de volta
					</h1>
					<p className="mt-1 text-sm text-slate-500">
						Entre com suas credenciais para acessar o sistema.
					</p>

					<form onSubmit={handleSubmit} className="mt-8 space-y-5">
						<div>
							<label
								htmlFor="login"
								className="mb-1.5 block text-sm font-medium text-slate-700"
							>
								Login
							</label>
							<input
								id="login"
								type="text"
								value={login}
								onChange={(e) => setLogin(e.target.value)}
								autoFocus
								placeholder="Usuário"
								className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
							/>
						</div>

						<div>
							<label
								htmlFor="senha"
								className="mb-1.5 block text-sm font-medium text-slate-700"
							>
								Senha
							</label>
							<input
								id="senha"
								type="password"
								value={senha}
								onChange={(e) => setSenha(e.target.value)}
								placeholder="••••••••"
								className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
							/>
						</div>

						<button
							type="submit"
							disabled={isPending}
							className="flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 disabled:cursor-not-allowed disabled:opacity-60"
						>
							<FontAwesomeIcon icon={faRightToBracket} />
							{isPending ? "Entrando..." : "Entrar"}
						</button>
					</form>
				</div>
			</main>
		</div>
	);
};

export default Login;
