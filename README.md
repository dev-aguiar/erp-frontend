# ERP - Frontend

Este repositório contém todo o frontend do projeto ERP - Spring.

[Clique aqui para ir ao projeto](https://github.com/dev-aguiar/erp-spring).

---

## Padrão do Frontend
A arquitetura do front segue o padrão de pacotes para facilitar a manutenção do código.  
- **Components** 📦: Contém todos os componentes reutilizáveis da aplicação, como inputs, cabeçalhos (Header), rodapés (Footer), cards e menu
- **Enums** 📌: Define os enums utilizados no sistema, como FormaPagamento e StatusPedido, padronizando valores fixos
- **Hooks** 🔗: Responsável por conectar o frontend ao backend, fornecendo os dados cadastrados no banco de dados
- **Interface** ⚙️: Contém as interfaces das entidades do backend, garantindo melhor organização dos dados.  
- **Modals** 🗄️: Armazena todos os modais de criação para clientes, produtos, pedidos e vendedores
- **Pages** 📄: Estrutura as páginas principais da aplicação, como Home, Clientes, Produtos, Pedidos, Vendedores e Contato
  
---

## Tecnologias Utilizadas  

### Frontend  
- ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)  
  **Descrição**: Linguagem de programação principal utilizada no desenvolvimento do frontend.  
- ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)  
  **Descrição**: Superset do JavaScript que adiciona tipagem estática opcional para melhorar a manutenção do código.  
- ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)  
  **Descrição**: Biblioteca JavaScript para criação de interfaces de usuário reativas e componentes reutilizáveis.  
- ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)  
  **Descrição**: Ferramenta de build rápida para projetos frontend modernos, utilizada no desenvolvimento do React.  
- ![Render](https://img.shields.io/badge/Render-0095FF?style=for-the-badge&logo=render&logoColor=white)  
  **Descrição**: Plataforma de hospedagem utilizada para disponibilizar a aplicação online.  

---

## Progresso do Frontend do projeto
- A interface gráfica está **80% concluída**!  
- Conta com uma página **HOME, CLIENTES, PRODUTOS, PEDIDOS, VENDEDORES e CONTATO**.  
- As páginas **CLIENTES, PRODUTOS, PEDIDOS, VENDEDORES** já possuem um **modal de criação** integrado.

### Capturas de Tela:

**Home:**  
![image](https://github.com/user-attachments/assets/eae73a36-6cf3-489c-aa5c-8e62da607d6a)

**Clientes:**  
![image](https://github.com/user-attachments/assets/e8421c32-bc50-4693-87b5-2946e73d324c)

**Pedidos:**  
![image](https://github.com/user-attachments/assets/3fe9c39b-068b-4d35-a0e6-9def3eb0e673)

**Produtos:**  
![image](https://github.com/user-attachments/assets/5b190a95-d177-4f94-8fb6-6ec95c6e2db4)

**Vendedores:**  
![image](https://github.com/user-attachments/assets/b5548516-becb-4ee1-ad8f-8408f448a05d)

**Contato:**  
![image](https://github.com/user-attachments/assets/add2e194-f7e8-4d31-bab2-46b2b0a8b7b1)

---

## Próximos passos:
- Melhorar a lógica de adicionar produtos nos pedidos **(adicionar um filtro para pesquisa por nome ao invés de ID)**.
- Conectar o frontend com o banco de dados hospedado no **Render**.
- Popular o banco de dados.

---

## Links Úteis  
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)  
- [TypeScript](https://www.typescriptlang.org/)  
- [React](https://react.dev/)  
- [Vite](https://vitejs.dev/)  
- [Render](https://render.com/)  
