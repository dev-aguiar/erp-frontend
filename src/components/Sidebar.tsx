import {
    faBoxOpen,
    faShoppingCart,
    faHouse,
    faUser,
    faUsers,
    faContactCard,
    faRightFromBracket,
    faCubes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { cn } from "../utils/cn";

interface NavItem {
    to: string;
    label: string;
    icon: IconDefinition;
}

const items: NavItem[] = [
    { to: "/", label: "Home", icon: faHouse },
    { to: "/produtos", label: "Produtos", icon: faBoxOpen },
    { to: "/clientes", label: "Clientes", icon: faUsers },
    { to: "/pedidos", label: "Pedidos", icon: faShoppingCart },
    { to: "/vendedores", label: "Vendedores", icon: faUser },
    { to: "/contato", label: "Contato", icon: faContactCard },
];

interface SidebarProps {
    open: boolean;
    onClose: () => void;
}

const Sidebar = ({ open, onClose }: SidebarProps) => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <>
            {/* Overlay no mobile */}
            {open && (
                <div
                    className="fixed inset-0 z-30 bg-black/40 lg:hidden"
                    onClick={onClose}
                />
            )}

            <aside
                className={cn(
                    "fixed inset-y-0 left-0 z-40 flex w-64 flex-col bg-slate-900 font-sans text-slate-300 transition-transform duration-200 lg:translate-x-0",
                    open ? "translate-x-0" : "-translate-x-full"
                )}
            >
                {/* Marca */}
                <div className="flex items-center gap-3 px-6 py-5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-white">
                        <FontAwesomeIcon icon={faCubes} />
                    </div>
                    <span className="text-sm font-semibold tracking-tight text-white">
                        ERP Dev Aguiar
                    </span>
                </div>

                {/* Navegação */}
                <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-2">
                    {items.map((item) => (
                        <NavLink
                            key={item.to}
                            to={item.to}
                            end={item.to === "/"}
                            onClick={onClose}
                            className={({ isActive }) =>
                                cn(
                                    "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition",
                                    isActive
                                        ? "bg-indigo-600 text-white"
                                        : "text-slate-300 hover:bg-slate-800 hover:text-white"
                                )
                            }
                        >
                            <FontAwesomeIcon icon={item.icon} className="w-4" />
                            {item.label}
                        </NavLink>
                    ))}
                </nav>

                {/* Logout */}
                <div className="border-t border-slate-800 p-3">
                    <button
                        onClick={handleLogout}
                        className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white"
                    >
                        <FontAwesomeIcon icon={faRightFromBracket} className="w-4" />
                        Sair
                    </button>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;