# Documentação frontend
Este é o frontend do projeto, desenvolvido com React, Vite, e TypeScript.

## Requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- [Docker](https://docs.docker.com/get-docker/)
- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

## Clonando o Repositório

Para clonar o repositório, execute o seguinte comando no terminal:

```bash
 git clone https://github.com/nandamsouza/PRODUCTIONLINE.git
 cd nome-do-repositorio.
```

## Configurando o Ambiente

##### Com Docker

Se você estiver usando Docker, siga os passos abaixo:

- Copie o arquivo .env.example para .env e configure as variáveis de ambiente necessárias:

```bash
cp .env.example .env
```

- Construa e inicie os contêineres:

```bash
docker-compose up --build
```

###### Acesse a aplicação:

- A aplicação estará disponível em http://localhost:3000.

##### Sem Docker

Se você preferir rodar a aplicação localmente sem Docker, siga os passos abaixo:

- Instale as dependências:

```bash
npm install
```

ou

```bash
yarn install
```

- Inicie a aplicação:

```bash
npm run start
```

ou

```bash
yarn start
```

###### Acesse a aplicação:

- A aplicação estará disponível em ex: http://localhost:3000.
