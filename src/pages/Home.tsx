import homeErp from "../assets/home-erp.png";

const Home = () => {
  return (
    <div className="home__container">
      <div className="home__container-title">
        <h1>Bem vindo(a) ao ERP</h1>
      </div>
      <div className="home__container-image">
        <img src={homeErp} alt="Imagem Home" />
      </div>
      <div className="home__container-text">
        <p>
          Este sistema foi desenvolvido como um teste de conhecimentos em{" "}
          <strong>Java, Spring, React e PostgreSQL</strong>.
        </p>

        <p>
          <strong>Siga os passos abaixo para começar:</strong>
        </p>

        <p>
          1️⃣ <strong>Navegue pelo Menu</strong> – Utilize o menu de navegação no
          topo para acessar as diferentes seções do sistema.
        </p>

        <p>
          2️⃣ <strong>Cadastre e Gerencie</strong> – Insira novos produtos,
          clientes, pedidos ou vendedores e gerencie através de cada seção.
        </p>

        <p>
          Divirta-se utilizando o <strong>ERP</strong>! 🎉
        </p>
      </div>
    </div>
  );
};

export default Home;
