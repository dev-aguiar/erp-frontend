import {
  faBoxOpen,
  faShoppingCart,
  faHouse,
  faUser,
  faUsers,
  faContactCard,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Menu = () => {
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
    </div>
  );
};

export default Menu;
