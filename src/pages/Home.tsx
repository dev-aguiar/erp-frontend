import homeErp from "../assets/home-erp.png";

const Home = () => {
  return (
    <div className="mx-auto max-w-4xl">
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <div className="grid gap-8 p-8 md:grid-cols-2 md:items-center">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              Bem-vindo(a) ao ERP
            </h1>
            <p className="mt-3 text-slate-600">
              Sistema desenvolvido como teste de conhecimentos em{" "}
              <strong className="text-slate-900">
                Java, Spring, React e PostgreSQL
              </strong>
              .
            </p>

            <div className="mt-6 space-y-3 text-sm text-slate-600">
              <p className="font-semibold text-slate-900">
                Siga os passos abaixo para começar:
              </p>
              <p>
                1️⃣ <strong>Navegue pelo menu lateral</strong> — acesse as
                diferentes seções do sistema.
              </p>
              <p>
                2️⃣ <strong>Cadastre e gerencie</strong> — produtos, clientes,
                pedidos e vendedores em cada seção.
              </p>
              <p>
                Divirta-se utilizando o{" "}
                <strong className="text-slate-900">ERP</strong>! 🎉
              </p>
            </div>
          </div>

          <img
            src={homeErp}
            alt="ERP"
            className="w-full rounded-xl shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
