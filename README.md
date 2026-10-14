# 🖥️ ERP - Frontend

Interface web do **ERP - Spring**: um sistema de gestão de clientes, produtos, pedidos e vendedores, construído em React + TypeScript com **Tailwind CSS** e integrado a uma API REST segura (Spring Boot + JWT).

---

## 🔗 Demo ao vivo

- 🖥️ **Aplicação:** https://erp-frontend-flax-seven.vercel.app
- 📄 **Documentação da API (Swagger):** https://erp-spring.onrender.com/swagger-ui/index.html
- 🔙 **Repositório do Back-end:** https://github.com/dev-aguiar/erp-spring

> ⏳ O back-end está no plano gratuito do Render e "hiberna" após inatividade.
> A primeira requisição pode levar ~30-50s para "acordar" o servidor — depois disso, fica rápido.

---

## ✅ Funcionalidades

- **Autenticação com JWT**: tela de **login** e **cadastro** de usuário, token persistido e enviado automaticamente em todas as requisições (interceptor do Axios).
- **Rotas protegidas**: páginas internas só acessíveis após login; sessão expirada redireciona para o login automaticamente.
- **Dashboard** (Home) com **indicadores** (totais de produtos, clientes, pedidos e vendedores) e lista dos **últimos pedidos**.
- **CRUD completo** de clientes, produtos, pedidos e vendedores (criar, editar e excluir).
- **Pedidos**: criação com seleção de cliente/vendedor, **adição de produtos** e **visualização dos itens** com subtotal e total do pedido.
- **Formatação monetária** em padrão brasileiro (R$ 1.234,56).
- **Notificações** (toasts) de sucesso e erro em todas as ações.
- **Layout responsivo** com sidebar fixa no desktop e menu retrátil no mobile.

---

## 🎨 Design System

A interface usa um **design system próprio** em Tailwind CSS (paleta slate + indigo, tipografia IBM Plex), com componentes reutilizáveis:

- `Button` — variantes (`primary`, `secondary`, `danger`, `ghost`), tamanhos e estado de loading.
- `Input` / `Select` — campos de formulário com label e estado de erro.
- `Card` — container padrão de conteúdo.
- `Sidebar`, `PageHeader` — estrutura de layout e navegação.

---

## 🏗️ Arquitetura do Frontend

O projeto segue uma organização por responsabilidade, facilitando a manutenção e a escalabilidade:

- **api** 🔌: Instância do Axios com interceptors (injeção do token JWT e tratamento de sessão expirada).
- **components/ui** 🧩: Design system (Button, Input, Select, Card).
- **components** 📦: Componentes de layout e navegação (Sidebar, PageHeader, PrivateRoute) e cards de entidade.
- **context** 🔐: `AuthContext` — estado global de autenticação (token, login/logout).
- **hooks** 🔗: Camada que conecta o front ao back (requisições e mutações via React Query).
- **interfaces** ⚙️: Tipagem das entidades e dos payloads (separação entre Request e Response).
- **modals** 🗄️: Modais de criação e edição de clientes, produtos, pedidos e vendedores.
- **pages** 📄: Páginas (Login, Register, Home/Dashboard, Clientes, Produtos, Pedidos, Vendedores, Contato).

---

## 🚀 Tecnologias Utilizadas

- ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
  **TypeScript**: Tipagem estática para um código mais seguro e manutenível.
- ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
  **React 19**: Biblioteca para construção de interfaces reativas por componentes.
- ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
  **Vite**: Build e dev server ultrarrápidos para projetos front-end modernos.
- ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
  **Tailwind CSS**: Estilização utilitária e base do design system.
- ![React Query](https://img.shields.io/badge/React_Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white)
  **TanStack React Query**: Gerenciamento de estado assíncrono e cache das requisições à API.
- ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
  **Axios**: Cliente HTTP (com interceptors para JWT).
- ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)
  **React Router**: Roteamento, rotas protegidas e navegação (SPA).
- ![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
  **Vercel**: Hospedagem do front-end, com deploy automático a cada push no GitHub.

---

## 🖼️ Capturas de Tela

**Login/Cadastro:**
<img width="1590" height="728" alt="image" src="https://github.com/user-attachments/assets/865c646b-f5f0-4e32-9d0a-e8efeffa3bae" />
<img width="1590" height="722" alt="image" src="https://github.com/user-attachments/assets/35bbed69-c78e-4295-9cc2-a148a09e6ed2" />

**Página Inicial (Dashboard):**
<img width="1590" height="730" alt="image" src="https://github.com/user-attachments/assets/0eee0875-1ba9-4089-ba90-b3845f7e3f63" />

**Gestão de Clientes:**
<img width="1588" height="730" alt="image" src="https://github.com/user-attachments/assets/5d808e74-2960-4403-8029-273f0a19c7fb" />

**Gestão de Pedidos:**
<img width="1590" height="731" alt="image" src="https://github.com/user-attachments/assets/bff61d3a-99e4-4e5a-9e82-a14a9bfe8d13" />

**Gestão de Produtos:**
<img width="1582" height="734" alt="image" src="https://github.com/user-attachments/assets/9b3b3979-3fd7-43ef-8516-fca60c4873c6" />

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

> Scripts disponíveis: `npm run dev` (aponta para o back em nuvem), `npm run local` (back local), `npm run build` (build de produção).

---

## 🗺️ Próximos passos

- 🔎 Busca de produto por **nome** (em vez de ID) ao adicionar ao pedido.
- 🌙 Tema escuro (dark mode).
- 📈 Mais indicadores no dashboard (faturamento, gráfico de vendas).
- 📄 Paginação nas listagens.

---

## 👤 Autor

**André Aguiar**

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/dev-aguiar) [![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/dev-aguiar/)
