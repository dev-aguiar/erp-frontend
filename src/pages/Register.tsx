import { useState, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCubes, faCheck, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { useRegister } from "../hooks/useRegister";

const Register = () => {
    const [login, setLogin] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmar, setConfirmar] = useState("");

    const navigate = useNavigate();
    const { mutate: cadastrar, isPending } = useRegister();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (!login || !senha || !confirmar) {
            toast.error("Preencha todos os campos.");
            return;
        }
        if (senha.length < 4) {
            toast.error("A senha deve ter pelo menos 4 caracteres.");
            return;
        }
        if (senha !== confirmar) {
            toast.error("As senhas não conferem.");
            return;
        }

        cadastrar(
            { login, senha, role: "USER" },
            {
                onSuccess: () => {
                    toast.success("Conta criada! Faça login para continuar.");
                    navigate("/login");
                },
                onError: (error: any) => {
                    if (error?.response?.status === 409) {
                        toast.error("Esse login já está em uso.");
                    } else {
                        toast.error("Não foi possível criar a conta.");
                    }
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
                        Crie sua conta em segundos.
                    </h2>
                    <p className="mt-4 text-indigo-100">
                        Cadastre-se como usuário e comece a explorar o sistema.
                    </p>

                    <ul className="mt-8 space-y-3 text-sm text-indigo-100">
                        {[
                            "Acesso imediato ao painel",
                            "Visualize produtos, clientes e pedidos",
                            "Seus dados protegidos por autenticação",
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
                    <div className="mb-8 flex items-center gap-3 lg:hidden">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-white">
                            <FontAwesomeIcon icon={faCubes} className="text-lg" />
                        </div>
                        <span className="text-lg font-semibold tracking-tight text-slate-900">
                            ERP Dev Aguiar
                        </span>
                    </div>

                    <h1 className="text-2xl font-bold text-slate-900">Criar conta</h1>
                    <p className="mt-1 text-sm text-slate-500">
                        Cadastre-se para acessar o sistema.
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
                                placeholder="Escolha um usuário"
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

                        <div>
                            <label
                                htmlFor="confirmar"
                                className="mb-1.5 block text-sm font-medium text-slate-700"
                            >
                                Confirmar senha
                            </label>
                            <input
                                id="confirmar"
                                type="password"
                                value={confirmar}
                                onChange={(e) => setConfirmar(e.target.value)}
                                placeholder="••••••••"
                                className="w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isPending}
                            className="flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 disabled:cursor-not-allowed disabled:opacity-60"
                        >
                            <FontAwesomeIcon icon={faUserPlus} />
                            {isPending ? "Criando..." : "Criar conta"}
                        </button>
                    </form>

                    <p className="mt-6 text-center text-sm text-slate-500">
                        Já tem conta?{" "}
                        <Link
                            to="/login"
                            className="font-medium text-indigo-600 hover:text-indigo-700"
                        >
                            Entrar
                        </Link>
                    </p>
                </div>
            </main>
        </div>
    );
};

export default Register;
