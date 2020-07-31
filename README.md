# Telzir

Teste realizado utilizando ReactJS para a construção da interface, NodeJS para o servidor e SQLite como banco de dados.

## Tecnologias

#### Web

-   ReactJS (Create React App)
-   React Router
-   Redux/React Redux
-   Styled Components

#### Server

-   Express
-   Bcrypt
-   JWT (JSON Web Token)

#### Database

-   SQLite3
-   Knex
-   Bookshelf

## Instalação

#### Pré-requisitos

-   NodeJS: `^14.5.*`
-   Yarn: `^1.22.*`
-   Git: `^2.27.*`

No terminal, clone o repositório:

```
git clone https://github.com/vitor-adriano/loldesign-telzir
```

Após finalizar o processo, no diretório raiz, instale as dependências:

```
yarn install
```

No diretório `server/`, crie um arquivo `.env` e insira o seguinte código:

```
# ------------------------------------#
# APP_KEY deve retornar uma "string"  #
# http://nux.net/secret               #
# ------------------------------------#
APP_KEY=secret
```

Crie o arquivo de banco de dados e insira as informações necessárias para a aplicação com os comandos na seguinte ordem:

```
yarn db:migrate
yarn db:seed
```

## Execução

A aplicação web e o servidor devem ser executados em terminais distintos, respectivamente, com os seguintes comandos:

```
yarn web:dev
```

```
yarn server:dev
```
