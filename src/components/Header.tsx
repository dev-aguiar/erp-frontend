import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <FontAwesomeIcon icon={faHouse} className="header__link" />
      </Link>
      <div className="header__logo">
        <Link to="/" className="header__link">
          <h1>ERP.</h1>
        </Link>
      </div>
    </div>
  );
};

export default Header;
