# 📦 Trendify
    Este projeto é uma aplicação de e-commerce construída com React e Next.js 15. Utiliza TypeScript para garantir uma codificação robusta e fácil de manter, e Tailwind CSS para garantir um design responsivo e moderno. O objetivo deste projeto é fornecer uma plataforma funcional de e-commerce com funcionalidades como visualização de produtos, categorias, carrinho de compras, login e área do usuário.

## 🚀 Tecnologias Utilizadas

- **React**: Biblioteca para construção de interfaces de usuário.
- **Next.js 15**: Framework para renderização do lado do servidor e roteamento otimizado.
- **TypeScript**: Tipagem estática para garantir robustez e manutenção do código.
- **Tailwind CSS**: Framework CSS de utilitários para design responsivo e customizado.
- **ShadCN**: Biblioteca de componentes UI para React, utilizada para criar interfaces modulares e estéticas, otimizadas para uma experiência de usuário suave e eficiente.
- **FakeAPI (Platzi)**: API falsa para simulação de dados de produtos, categorias, carrinho, login e cadastro.

## 🛠️ **Husky, lint-staged, Prettier e ESLint**
   &nbsp; Para manter a qualidade do código e a consistência do estilo, foram implementadas ferramentas como Husky, lint-staged, Prettier e ESLint, garantindo que o código permaneça limpo, organizado e aderente às melhores práticas do mercado.

## 📌 Funcionalidades

- **Tela Principal**: Página inicial com produtos em destaque e uma visão geral do e-commerce.
- **Categorias de Produtos**: Página onde os usuários podem filtrar produtos por categoria.
- **Carrinho de Compras**: Funcionalidade para adicionar, remover e listar produtos no carrinho.
- **Tela de Produto**: Página onde o usuário pode ver os detalhes de um produto selecionado.
- **Login e Cadastro**: Autenticação de usuários com endpoints para login e registro.
- **Área do Usuário**: Dashboard onde o usuário autenticado pode visualizar dados pessoais e histórico de compras.

## 🚀 Como Rodar o Projeto

### 📌 Pré-requisitos

- **Node.js** (versão recomendada 16 ou superior)
- **npm** 

### 📌 Passos para Execução

1. Clone o repositório:

    ```bash
    git clone https://github.com/DevDaniloSants/trendify.git
    cd ecommerce
    ```

2. Instale as dependências:

    Usando npm:

    ```bash
    npm install
    ```

3. Adicione na raiz do projeto um arquivo .env:

    ```bash
    API_URL='https://api.escuelajs.co/api/v1'
    ```

4. Execute o projeto em modo de desenvolvimento:

    Usando npm:

    ```bash
    npm run dev
    ```


5. Abra seu navegador e acesse:

    ```
    http://localhost:3000
    ```

## 📂 Estrutura do Projeto

A estrutura do projeto foi planejada para ser modular, escalável e de fácil manutenção.

### 🏷️ **Páginas**
- **`(private)/` e `(public)/`** → Contêm todas as páginas do projeto, separadas entre privadas (restritas a usuários autenticados) e públicas.
- **`_components/` dentro de cada uma pasta → Componentes exclusivos para páginas privadas ou públicas.
- **`_components/` global** → Componentes reutilizados tanto em páginas públicas quanto privadas.

### ⚙️ **Ações e Camada de Acesso a Dados**
- **`actions/`** → Gerencia **mutações** na Fake API, como `POST`, `PUT` e `DELETE`.
- **`data-access/`** → Responsável apenas por **requisições GET**, garantindo uma separação clara de responsabilidades.

### 📦 **Gerenciamento de Estado**
- **`Context API`** → Usado para gerenciar o estado global (exemplo: estado do carrinho).
- **`Local Storage`** → Utilizado para persistir informações importantes, como o carrinho de compras e os dados do usuário.

### 📡 **Rotas da API Utilizadas**

    ```
    # Criar um usuário
    POST ${process.env.API_URL}/users/

    # Listar categorias
    GET ${process.env.API_URL}/categories

    # Filtrar produtos por categoria
    GET ${process.env.API_URL}/products/?categorySlug={slug}

    # Obter um produto pelo ID
    GET ${process.env.API_URL}/products/{id}

    # Listar produtos com paginação
    GET ${process.env.API_URL}/products/?offset=10&limit=10

    # Filtrar produtos por preço
    GET ${process.env.API_URL}/products/?price_min=20&price_max=100000000&offset=10&limit=100

    # Obter dados do usuário autenticado
    GET ${process.env.API_URL}/auth/profile

    # Login do usuário
    POST ${process.env.API_URL}/auth/login
    ```

### 🔄 **Hooks Personalizados**
Os hooks ajudam a abstrair lógicas e reutilizar código.  



:child: Author
<table> <tr> <td align="center"> <img src="https://avatars.githubusercontent.com/u/152008168?s=400&u=710379e70ac9c4490d3044ffd12a47092b993f76&v=4" width="100px;" alt="Foto de Danilo Santos no GitHub"/><br> <sub> <b>Danilo Santos</b> </sub> </a> </td> </tr> </table>
