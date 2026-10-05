# 🖥️ ERP - Frontend

Interface web do **ERP - Spring**: um sistema de gestão de clientes, produtos, pedidos e vendedores, construído em React + TypeScript e integrado a uma API REST em Spring Boot.

---

## 🔗 Demo ao vivo

- 🖥️ **Aplicação:** https://erp-frontend-flax-seven.vercel.app
- 📄 **Documentação da API (Swagger):** https://erp-spring.onrender.com/swagger-ui/index.html
- 🔙 **Repositório do Back-end:** https://github.com/dev-aguiar/erp-spring

> ⏳ O back-end está no plano gratuito do Render e "hiberna" após inatividade.
> A primeira requisição pode levar ~30-50s para "acordar" o servidor — depois disso, fica rápido.

---

## 🏗️ Arquitetura do Frontend

O projeto segue uma organização por responsabilidade, facilitando a manutenção e a escalabilidade:

- **Components** 📦: Componentes reutilizáveis (inputs, Header, Footer, cards e menu).
- **Enums** 📌: Enums do sistema, como `FormaPagamento` e `StatusPedido`, padronizando valores fixos.
- **Hooks** 🔗: Camada que conecta o front ao back (requisições e mutações via React Query).
- **Interfaces** ⚙️: Tipagem das entidades e dos payloads (separação entre Request e Response).
- **Modals** 🗄️: Modais de criação e edição de clientes, produtos, pedidos e vendedores.
- **Pages** 📄: Páginas principais (Home, Clientes, Produtos, Pedidos, Vendedores e Contato).

---

## 🚀 Tecnologias Utilizadas

- ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
  **TypeScript**: Tipagem estática para um código mais seguro e manutenível.
- ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
  **React 19**: Biblioteca para construção de interfaces reativas por componentes.
- ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
  **Vite**: Build e dev server ultrarrápidos para projetos front-end modernos.
- ![React Query](https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white)
  **TanStack React Query**: Gerenciamento de estado assíncrono e cache das requisições à API.
- ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
  **Axios**: Cliente HTTP para consumo da API REST.
- ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)
  **React Router**: Roteamento e navegação entre as páginas (SPA).
- ![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
  **Vercel**: Hospedagem do front-end, com deploy automático a cada push no GitHub.

---

## ✅ Funcionalidades

- **CRUD completo** de clientes, produtos, pedidos e vendedores (criar, editar e excluir).
- **Pedidos**: criação com seleção de cliente/vendedor, **adição de produtos** e **visualização dos itens** com subtotal por item e **total do pedido**.
- **Formatação monetária** em padrão brasileiro (R$ 1.234,56).
- **Layout responsivo** (desktop e mobile).
- Integração completa com a API via **React Query** (cache e revalidação automática).

---

## 🖼️ Capturas de Tela

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

## ⚙️ Como executar localmente

Pré-requisitos: [Node.js 18+](https://nodejs.org/) e o **back-end rodando** (veja o [repositório do back-end](https://github.com/dev-aguiar/erp-spring)).

1. Clone o repositório:
    ```bash
    git clone https://github.com/dev-aguiar/erp-frontend.git
    cd erp-frontend
    ```

2. Instale as dependências:
    ```bash
    npm install
    ```

3. Configure a URL da API (arquivo `.env.local` na raiz):
    ```env
    VITE_API_URL=http://localhost:8080
    ```

4. Rode em modo local:
    ```bash
    npm run local
    ```

5. Acesse: http://localhost:5173

---

## 🗺️ Próximos passos

- 🔐 Tela de login integrada à autenticação (JWT) do back-end.
- 🔎 Busca de produto por **nome** (em vez de ID) ao adicionar ao pedido.
- 🎨 Migração do CSS para **Tailwind** + biblioteca de componentes.
- 📊 Dashboard com indicadores (total de pedidos, faturamento, etc.).

---

## 👤 Autor

**André Aguiar**

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/dev-aguiar) [![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/dev-aguiar/)
