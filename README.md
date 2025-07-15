# Purrfect Deals

## Descrição

Este projeto é um aplicativo móvel construído com **React Native** e **Expo**. Ele permite aos usuários encontrar e explorar promoções de jogos, com funcionalidades de busca por título e filtragem por preço mínimo e máximo. As ofertas são apresentadas em cards informativos e organizadas em seções como **"Economias da Semana"** e **"Melhores Notas"**.

---

## Tecnologias Utilizadas

O projeto utiliza as seguintes tecnologias:

- **React Native**: Para o desenvolvimento do aplicativo móvel.
- **Expo**: Um framework para o desenvolvimento universal de aplicativos React.
- **styled-components**: Para estilização dos componentes.
- **Axios**: Cliente HTTP para fazer requisições à API.
- **CheapShark API**: API utilizada para buscar as promoções de jogos.

---

## Instalação e Execução

Para configurar e rodar o projeto localmente, siga os passos abaixo:

### Clone o repositório:

```bash
git clone https://github.com/0Mavi/Maria-Vitoria---Taqtile-Case.git
cd Maria-Vitoria---Taqtile-Case
```

### Instale as dependências:

```bash
npm install
# ou
yarn install
```

### Inicie o aplicativo Expo:

```bash
npm start
# ou
yarn start
```

Isso iniciará o servidor de desenvolvimento do Expo. Você pode então usar o aplicativo **Expo Go** no seu celular ou um emulador/simulador para visualizar o aplicativo.

---

## Estrutura do Projeto

- **App.js**: Componente principal que inicializa o `ThemeProvider` e o `HomeScreen`.

- **api/cheapsharkApi.js**: Contém a lógica para interagir com a API CheapShark e buscar as ofertas de jogos.

- **components/**: Armazena componentes reutilizáveis da UI, como:
  - `GameCard.js`: Exibe os detalhes de uma oferta de jogo (título, Metacritic, preço, etc.).
  - `NavBar.js`: Barra de navegação superior com o logo e o botão de busca.
  - `PriceFilterRow.js`: Componente para entrada de preço mínimo e máximo na tela de busca.
  - `Search.js`: Um componente de busca genérico (atualmente com dados mockados).

- **hook/useDealsSearch.js**: Um hook personalizado para gerenciar a lógica de busca e estado das ofertas da API.

- **pages/**: Contém as telas principais do aplicativo:
  - `HomeContent.js`: Renderiza o conteúdo da tela inicial, incluindo a barra de navegação e as listas de ofertas.
  - `HomeScreen.js`: Gerencia o estado e a lógica de navegação entre as telas "Home" e "Search", além de orquestrar os filtros.
  - `SearchContent.js`: Exibe a interface de busca com campos de input e a lista de resultados.

- **theme/colors.js**: Define as cores utilizadas em todo o aplicativo.

- **app.json**: Arquivo de configuração do Expo para o aplicativo.

- **package.json**: Lista as dependências e scripts do projeto.

## Design

O design deste aplicativo pode ser visualizado no Figma:

🔗 [Clique aqui para abrir no Figma]([https://www.figma.com/file/SEU_ID_DO_ARQUIVO/SEU_PROJETO](https://www.figma.com/design/y6ZVeDj7P5hafOpzHejmVa/Purrfect-Deals?node-id=0-1&t=WFwfEMkpG3pD1QmX-1))

