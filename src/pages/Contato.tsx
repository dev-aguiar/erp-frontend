import {
  faGithub,
  faJava,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Contato = () => {
  return (
    <div className="contato">
      <div className="contato__card">
        <img src="img.jpg" alt="André" style={{ width: "100%" }} />
        <h1>André Aguiar</h1>
        <p className="contato__card-title">
          Desenvolvedor Back-End
          <FontAwesomeIcon
            icon={faJava}
            className="contato__icon"
            style={{ paddingLeft: "10px" }}
          />
        </p>
        <Link
          to="mailto:andre.aguiar522@gmail.com"
          className="contato__card-item"
        >
          <FontAwesomeIcon icon={faEnvelope} className="contato__icon" />
          Email
        </Link>
        <Link to="https://github.com/dev-aguiar" className="contato__card-item">
          <FontAwesomeIcon icon={faGithub} className="contato__icon" /> GitHub
        </Link>
        <Link
          to="https://www.linkedin.com/in/dev-aguiar/"
          className="contato__card-item"
        >
          <FontAwesomeIcon icon={faLinkedin} className="contato__icon" />
          LinkedIn
        </Link>
        <Link to="https://wa.me/5511975158913" className="contato__card-item">
          <FontAwesomeIcon icon={faWhatsapp} className="contato__icon" />
          WhatsApp
        </Link>
        <p>
          <button className="contato__card-btn">Encontrou um bug?</button>
        </p>
      </div>
    </div>
  );
};

export default Contato;
