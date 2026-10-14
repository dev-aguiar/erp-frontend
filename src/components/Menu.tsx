import {
  faBoxOpen,
  faShoppingCart,
  faHouse,
  faUser,
  faUsers,
  faContactCard,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Menu = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="menu__container">
      <Link to="/" className="menu__item">
        <FontAwesomeIcon icon={faHouse} className="menu__icon" /> Home
      </Link>
      <Link to="/produtos" className="menu__item">
        <FontAwesomeIcon icon={faBoxOpen} className="menu__icon" />
        Produtos
      </Link>
      <Link to="/clientes" className="menu__item">
        <FontAwesomeIcon icon={faUsers} className="menu__icon" />
        Clientes
      </Link>
      <Link to="/pedidos" className="menu__item">
        <FontAwesomeIcon icon={faShoppingCart} className="menu__icon" />
        Pedidos
      </Link>
      <Link to="/vendedores" className="menu__item">
        <FontAwesomeIcon icon={faUser} className="menu__icon" />
        Vendedores
      </Link>
      <Link to="/contato" className="menu__item">
        <FontAwesomeIcon icon={faContactCard} className="menu__icon" />
        Contato
      </Link>
      <button onClick={handleLogout} className="menu__item menu__logout">
        <FontAwesomeIcon icon={faRightFromBracket} className="menu__icon" />
        Sair
      </button>
    </div>
  );
};

export default Menu;
